import { useState } from "react";
import useStateCallback from "./useStateCallback";

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}



export default function useFormState(defaults, req) {
    const [name, setName] = useState('')
    const [form, setForm] = useStateCallback(defaults);
    const [submitted, setSubmitted] = useStateCallback(false);
    const [required, setRequired] = useStateCallback(req);

    const setItem = (data, bc) => {
        setForm({ ...form, ...data }, bc)
    }
    
    const permit = () => {
        var oksend = false;
        for (var r in required) {
            var key = required[r];
            if (!form[key] || form[key] === "") {
                oksend = true;
                return true;
                break
            }
        }
        return oksend;
    }

    const handleInput = (name, bc) => {
        return {
            name,
            id: name,
            value: form[name] || "",
            onChange: (e) => {
                if (e.target.type === "checkbox") {
                    const { checked, name } = e.target;
                    setItem({ [name]: checked }, bc)
                } else {
                    const { value, name } = e.target;
                    setItem({ [name]: value }, bc)

                }
            },





            ...(
                () => {
                    if (submitted && required.indexOf(name) !== -1 && !form[name]) {
                        return {
                            error: true,
                            helperText: "الزامی است"
                        }
                    } else {
                        if (typeof form[name] === "object" && isEmpty(form[name])) {
                            return {
                                error: true,
                                helperText: "الزامی است"
                            }
                        } else {
                            return {}
                        }
                    }
                }
            )()
        }
    }
    return [form, setItem, handleInput, setSubmitted, permit, submitted, setRequired];
}