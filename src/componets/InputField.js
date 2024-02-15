const InputField = (props) => {
  const { handleChange, label, name, type, value } = props;
  return (
    <section>
      <label htmlFor={name}>{label}</label>
      <input
        className="input"
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        required
      />
    </section>
  );
};

export default InputField;
