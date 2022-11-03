import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";

import { ICategory } from "../../services/categoryService";
import { theme } from "../../theme/theme";

const Wrapper = styled.div`
  display: flex;
  margin-top: 64px;
  margin-bottom: 32px;
`;

const Category = styled.a`
  display: inline-flex;
  padding-right: 15px;
  color: ${theme.colors.black};
  text-decoration: none;
  text-transform: uppercase;
  /* color: ${theme.colors.darkBlue.medium}; */
`;

const CategoryFamily = styled.div`
  display: flex;

  .child-catagory {
    transition: 0.3s opacity ease;
    /* color: ${theme.colors.burlyWood.high}; */
  }

  :hover {
    .child-catagory {
      display: block;
    }
  }
`;

interface IProps {
  categories: ICategory[];
}

export const ProjectsNavbar: React.FC<IProps> = ({ categories }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const selectedCategoryId = router?.query?.category?.toString();

  return (
    <Wrapper>
      <Link href="/portfolio" passHref>
        <Category
          css={css`
            color: ${!selectedCategoryId ? `${theme.colors.darkBlue.high}` : `${theme.colors.darkBlue.medium}`};
          `}
        >
          {t("portfolio:all")}
        </Category>
      </Link>

      {categories.map((c) => {
        const isOneOfGroupItemSelected =
          c.id == selectedCategoryId || c.children.find((ca) => ca.id == selectedCategoryId);

        return (
          <CategoryFamily key={c.id}>
            <Link href={`/portfolio?category=${c.id}`} passHref>
              <Category
                css={css`
                  color: ${selectedCategoryId == c.id
                    ? `${theme.colors.darkBlue.high}`
                    : `${theme.colors.darkBlue.medium}`};
                `}
              >
                {c.name}
              </Category>
            </Link>

            {c.children.map((sc) => {
              return (
                <Link key={sc.id} href={`/portfolio?category=${sc.id}`} passHref>
                  <Category
                    className="child-catagory"
                    css={css`
                      display: ${isOneOfGroupItemSelected ? "block" : "none"};
                      color: ${selectedCategoryId == sc.id
                        ? `${theme.colors.darkBlue.high}`
                        : `${theme.colors.burlyWood.high}`};
                    `}
                  >
                    {sc.name}
                  </Category>
                </Link>
              );
            })}
          </CategoryFamily>
        );
      })}
    </Wrapper>
  );
};
