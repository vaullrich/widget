import * as React from 'react';
import './input.scss';

export interface EditInputProps {
  text?: string;
  placeholder?: string;
  /** валидация по regex */
  regex?: RegExp;
  onValueBlur?: (text: string) => void;
  className?: string;
  autofocus?: boolean;
}

/**
 * Отрисовывает поле для редактирования текста
 */
const Input: React.FC<EditInputProps> = (props: EditInputProps): JSX.Element => {
  const {text, onValueBlur, regex, placeholder, autofocus} = props;

  const inputElement = React.useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = React.useState(text || '');

  const complete = (): void => {
    if (inputText.length < 3) {
      setInputText('');
    } else {
      onValueBlur?.(inputText);
      inputElement.current?.blur();
    }
  };

  const cancel = (): void => {
    setInputText('');
    inputElement.current?.blur();
  };

  // фокус на инпут и двигаем курсор в конец строки
  React.useEffect(() => {
    if (!autofocus) return;
    const input = inputElement.current;
    if (input) {
      input.focus();
      const cursor = input.value ? input.value.length : 0;
      input.selectionStart = cursor;
      input.selectionEnd = cursor;
    }
  });

  const keyToAction: Record<string, () => void> = {
    'Enter': complete,
    'Escape': cancel,
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (keyToAction[e.key]) {
      keyToAction[e.key]();  
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    if (!regex || regex.test(value)) {
      setInputText(value);
    }
  };

  return (
    <input
      ref={inputElement}
      id='search'
      type="text"
      placeholder={placeholder}
      value={inputText}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  onValueBlur: (): void => undefined,
};

export default Input;
