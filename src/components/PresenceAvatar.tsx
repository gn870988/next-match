import usePresenceStore from "@/hooks/usePresenceStore";
import { Avatar, Badge } from "@nextui-org/react";

type Props = {
  userId?: string;
};

export default function PresenceAvatar({ userId }: Props) {
  const { members } = usePresenceStore((state) => ({
    members: state.members,
  }));

  const isOnline = userId && members.indexOf(userId) !== -1;

  return (
    <Badge content="" color="success" shape="circle" isInvisible={!isOnline}>
      <Avatar alt="User avatar" />
    </Badge>
  );
}
