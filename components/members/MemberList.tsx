import { css } from "@emotion/core";

import { IMember } from "../../services/memberService";
import { theme } from "../../theme/theme";
import { MemberCard } from "./MemberCard";

const teamStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1px;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface IProps {
  members: IMember[];
}

export const MemberList: React.FC<IProps> = ({ members }) => {
  return (
    <div css={teamStyle}>
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};
