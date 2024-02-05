import { useState } from 'react';

function InputExample() {
    const [form, setForm] = useState({ name: '', last: '' });
    const onChangeInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    return (
        <div>Name
            <br />
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br />
            Lastname
            <br />
            <input name="last" value={form.last} onChange={onChangeInput} />
            <br />
            {form.name} {form.last}
        </div>
    )
}

export default InputExample;