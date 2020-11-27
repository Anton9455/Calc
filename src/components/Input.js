export default ({ input, defalutValue, value }) => {
    debugger;
  return (
    <div className={input.style}>
      <input
        type="text"
        disabled={input.disabled ? input.disabled : ""}
        className="form-control"
        id={input.id}
        defaultValue={defalutValue}
        value = {value}
      />
    </div>
  );
};
