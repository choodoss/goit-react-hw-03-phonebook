import PropTypes from 'prop-types';
import { FormSection, Label, Input, SubmitBt } from './Form.styled'

export default function Form({ hendleSubmitFormProp, hendleInputProp, name, number, inputIdName, inputIdNTel }) {
    const form =
        <FormSection onSubmit={hendleSubmitFormProp}>
            <Label htmlFor={inputIdName}>Name</Label>
            <Input id={inputIdName}
                onChange={hendleInputProp}
                type="text"
                name="name"
                pattern="[\p{L} '-]+"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                required
            />
            <Label htmlFor={inputIdNTel}>Phone</Label>
            <Input
                id={inputIdNTel}
                onChange={hendleInputProp}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <SubmitBt type='submit'>add contact</SubmitBt>
        </FormSection>
    return form;
};

Form.propTypes = {
    hendleSubmitFormProp: PropTypes.func,
    hendleInputProp: PropTypes.func,
    name: PropTypes.string,
    number: PropTypes.string,
    inputIdName: PropTypes.string,
    inputIdNTel: PropTypes.string,
}