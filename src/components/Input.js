export default ({ input, defalutValue, value }) => {

  const inputChangedHandler = (event) => { }

  return (
    <div className={input.style}>
      <input
        type="text"
        disabled={input.disabled ? input.disabled : ""}
        className="form-control"
        id={input.id}
        defaultValue={defalutValue}
        value={value}
        onChange={(event) => inputChangedHandler(event)}
      />
    </div>
  );
};
