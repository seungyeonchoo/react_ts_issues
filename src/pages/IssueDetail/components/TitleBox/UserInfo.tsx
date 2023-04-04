interface Props {
  img: string;
  author: string;
}

const UserInfo = ({ img, author }: Props) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <img className="w-14 rounded-full" src={img} alt="avatar_img" />
      <span className="text-xs font-bold">{author}</span>
    </div>
  );
};

export default UserInfo;
