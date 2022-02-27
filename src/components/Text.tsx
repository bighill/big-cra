interface Props {
  h?: "1" | "2" | "3";
}

export const Text: React.FC<Props> = ({ h, children }) => {
  if (h) {
    switch (h) {
      case "1":
      default:
        return <h1>{children}</h1>;
      case "2":
        return <h2>{children}</h2>;
      case "3":
        return <h3>{children}</h3>;
    }
  }

  return <p>{children}</p>;
};
