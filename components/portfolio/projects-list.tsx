import { css } from "@emotion/core";
import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import useSWR, { useSWRPages } from "swr";

import { IPaginatedResponse } from "../../core/models";
import { IProjectPreview, ProjectService } from "../../services/projectService";
import { theme } from "../../theme/theme";
import { Async } from "../Async";
import { LoadMore } from "../LoadMore";
import { ProjectsListItem } from "./projects-list-item";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto;
  grid-gap: 24px;
  margin-bottom: 24px;
  grid-template-areas:
    "area-1 area-1 area-1 area-1 area-1 area-1 area-1 area-1 area-1 area-1"
    "area-2 area-2 area-2 area-2 area-2 area-2 area-2 area-2 area-2 area-2"
    "area-3 area-3 area-3 area-3 area-3 area-3 area-3 area-3 area-3 area-3"
    "area-4 area-4 area-4 area-4 area-4 area-4 area-4 area-4 area-4 area-4"
    "area-5 area-5 area-5 area-5 area-5 area-5 area-5 area-5 area-5 area-5"
    "area-6 area-6 area-6 area-6 area-6 area-6 area-6 area-6 area-6 area-6";

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-areas:
      "area-1 area-1 area-1 area-1 area-2 area-2 area-2 area-2 area-2 area-2"
      "area-3 area-3 area-3 area-3 area-3 area-3 area-4 area-4 area-4 area-4"
      "area-5 area-5 area-5 area-5 area-5 area-6 area-6 area-6 area-6 area-6";
  }
`;

const Page = styled.div`
  padding-bottom: 104px;
`;

const ListWrapper = styled.div`
  min-height: 440px;
`;

const LoadMoreWrapper = styled.div`
  margin-top: 40px;
`;

const DEFAULT_LIMIT = 6;

export const ProjectsList = () => {
  const { t, lang } = useTranslation();
  const router = useRouter();
  const selectedCategoryId = router?.query?.category?.toString();

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages<
    number | null,
    IPaginatedResponse<IProjectPreview>
  >(
    "projects",
    ({ offset, withSWR }) => {
      const branch = withSWR(
        useSWR(
          ProjectService.getManyQuery({
            lang,
            categoryId: selectedCategoryId,
            skip: offset ?? 0,
            take: DEFAULT_LIMIT,
          }),
          (q) => ProjectService.getMany(q, lang),
        ),
      );

      return (
        <Async
          branch={branch}
          minHeight="1000px"
          renderData={(projects) => {
            return (
              <Grid>
                {projects.data.map((project, i) => (
                  <ProjectsListItem
                    key={project.id}
                    project={project}
                    css={css`
                      grid-area: ${`area-${i + 1}`};
                    `}
                  />
                ))}
              </Grid>
            );
          }}
        />
      );
    },
    (SWR, index) => {
      if (SWR.data) {
        if (SWR.data.total - DEFAULT_LIMIT * SWR.data.page <= 0) return null;
      }

      return (index + 1) * DEFAULT_LIMIT;
    },
    [selectedCategoryId],
  );

  return (
    <Page>
      <ListWrapper>{pages}</ListWrapper>

      {!isReachingEnd && (
        <LoadMoreWrapper>
          <LoadMore onClick={loadMore} disabled={isLoadingMore} title={t("portfolio:more")} />
        </LoadMoreWrapper>
      )}
    </Page>
  );
};
