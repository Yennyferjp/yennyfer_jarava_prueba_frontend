import React, { useState, useEffect, useCallback } from 'react';
import styles from './InputsSection.module.css';

function InputsSection() {
  // Estados para almacenar los valores de los inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [isSelectOpen, setSelectOpen] = useState(false);
  const [options, setOptions] = useState([
    { label: 'Option 1', selected: false },
    { label: 'Option 2', selected: false },
    { label: 'Option 3', selected: false },
    { label: 'Option 4', selected: false },
  ]);
  const [selectedRadioOption, setSelectedRadioOption] = useState('');

  // Función para manejar el cambio en el input de "Name"
  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  // Función para manejar el cambio en el input de "Email"
  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  // Función para manejar la apertura y cierre del menú select
  const handleToggleSelect = () => {
    setSelectOpen(!isSelectOpen);
  };

  // Función para manejar el clic en una opción del menú select
  const handleOptionClick = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].selected = !updatedOptions[index].selected;
    setOptions(updatedOptions, updateInputMessage);
  };

  // Función para manejar el cambio en la opción de radio
  const handleRadioChange = (event) => {
    setSelectedRadioOption(event.target.value, updateInputMessage);
  };

  // Función para actualizar el valor del inputMessage
  const updateInputMessage = useCallback(() => {
    setInputMessage(`${name}\n${email}`);
  }, [name, email]);

  useEffect(updateInputMessage, [name, email]);
  // Función para manejar el clic en el botón Submit
  const handleSubmit = () => {
    const selectedOptions = options
      .filter((option) => option.selected)
      .map((option) => option.label);

    const infoObject = {
      name: name,
      email: email,
      selectedOptions: selectedOptions,
      radioOption: selectedRadioOption,
    };

    // Imprimir toda la información en la consola
    console.log('Info Object:', infoObject);
  };

  return (
    <div className={styles.InputsSection}>
      <div>
        
        <button className={styles.selectButton} onClick={handleToggleSelect}>
        Select {isSelectOpen ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>} 
      </button>
        {isSelectOpen && (
          <ul className={styles.selectList}>
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(index)}>
                <input
                  type="checkbox"
                  checked={option.selected}
                  onChange={() => { }}
                  className={styles.checkbox}
                />
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Segundo div: Input radio */}
      <div className={styles.radio}>
        <label className={styles.label}>Radio</label>
        <div className={styles.radioOption}>
          <input
            type="radio"
            id="radio1"
            value="Option 1"
            checked={selectedRadioOption === 'Option 1'}
            onChange={(e) => handleRadioChange(e)}
          />
          <label htmlFor="radio1">Option 1</label>
        </div>
        <div className={styles.radioOption}>
          <input
            type="radio"
            id="radio2"
            value="Option 2"
            checked={selectedRadioOption === 'Option 2'}
            onChange={(e) => handleRadioChange(e)}
          />
          <label htmlFor="radio2">Option 2</label>
        </div>
        <div className={styles.radioOption}>
          <input
            type="radio"
            id="radio3"
            value="Option 3"
            checked={selectedRadioOption === 'Option 3'}
            onChange={(e) => handleRadioChange(e)}
          />
          <label htmlFor="radio3">Option 3</label>
        </div>
        <div className={styles.radioOption}>
          <input
            type="radio"
            id="radio4"
            value="Option 4"
            checked={selectedRadioOption === 'Option 4'}
            onChange={(e) => handleRadioChange(e)}
          />
          <label htmlFor="radio4">Option 4</label>
        </div>
      </div>

      {/* Tercer div: Input para imprimir valores */}
      <div className={styles.divInput}>
        <label className={styles.label}>Name:</label>
        <input
          className={styles.inputName}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <label className={styles.label}>Email:</label>
        <input
          className={styles.inputEmail}
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          className={styles.inputMessage}
          value={inputMessage}
          placeholder='Render the input text information here...'
          readOnly 
        />
        {/* Botón Submit */}
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputsSection;
