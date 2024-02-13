const TextareaField = (props) => {
  const { handleChange, label, name, value } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={handleChange}
        name={name}
        cols="45"
        rows="10"
        value={value}
      >
        Your message
      </textarea>
    </div>
  );
};

export default TextareaField;
