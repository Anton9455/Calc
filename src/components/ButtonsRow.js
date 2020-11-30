import Button from "./Button";

export default ({ row, isAdditional }) => {
  return (
    <div className="row mt-1">
      {row.map((button, index) => {
        if (isAdditional) {
          return (
            <div className={`w-100 ${index ? "mt-1" : ""}`} key={index}>
              <Button key={index} button={button} />
            </div>
          );
        }
        return <Button key={index} button={button} />;
      })}
    </div>
  );
};
