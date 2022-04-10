type IconComProps = {
  width?: string;
  height?: string;
  name: string;
};

export default ({ name }: IconComProps) => {
  return <img src={require(`./${name}.svg`)} alt="" />;
};
