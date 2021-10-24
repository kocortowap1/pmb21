import { extend } from 'vee-validate'

import {configure} from 'vee-validate'
import { required, email, regex,  numeric, oneOf, mimes, image, confirmed, required_if } from 'vee-validate/dist/rules'

const validationConfig ={
    classes:{
        valid: 'is-valid',
        invalid: 'is-invalid'
    }
}
configure(validationConfig)
extend("required", {
    ...required,
    message: "{_field_} harus diisi"
});
extend("required_if",{
    ...required_if,
    message: "{_field_} harus diisi jika belum wafat"
})
extend("one_of", {
    validate(value, values) {
        return values.indexOf(value) !== -1;
    },
    message: "{_field_} harus dipilih"

    // return "Jenis Kelamin harus dipilih";
});
extend("min", {
    validate(value, { length }) {
        return value.length >= length;
    },
    params: ["length"],
    message: "{_field_} harus lebih dari {length} digit"
});
extend("max", {
    validate(value, { length }) {
        return value.length >= length;
    },
    params: ["length"],
    message: "{_field_} harus kurang dari {length} digit"
});
extend("minmax", {
    validate(value, { min, max }) {
        return value.length >= min && value.length <= max;
    },
    params: ["min", "max"],
    message: "{_field_} antara {min} sampai {max} karakter"
});
extend("regex", {
    ...regex,
    message: "Harus angka, Contoh: 081742435421"
});
extend("email", {
    ...email,
    message: "{_field_} tidak valid"
});
extend("alpha_spaces", {
    ...email,
    message: "Karakter yang dibolehkan hanya Huruf dan Spasi"
});
extend('regexnama', {
    validate(value) {
        const ptr = /^[a-zA-Z'. ]+$/

        return ptr.test(value)
    },
    message: `Harus huruf (besar/kecil), spasi atau tanda petik tunggal`
})
extend('digits',{
    validate(value, {length}){
        return value.length == length
    },
    params: ["length"],
    message: "{_field_} harus {length} digit"
})
extend('numeric',{
    ...numeric,
    message: "{_field_} harus angka"
})
extend('oneOf',{
    ...oneOf,
    message: "{_field_} belum dipilih"
})
extend('dimensions',{
    validate(value, {height,width}){
        return value >= height && value >= width
    },
    params:["height", "width"],
    message: "{_field_} harus di atas {width}x{height} pixel"
})
extend('mimes',{
    ...mimes,
    message: 'Extensi file tidak diperbolehkan'
})
extend('image',{
    ...image,
    message: '{_field_} harus berupa gambar'
})
extend('confirmed',{

    ...confirmed,
    message: "{_field_} tidak sama dengan {target}"
})
extend('nikpattern',{
    validate(value) {
        const pattern = /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/
        return pattern.test(value)
    },
    message: '{_field_} tidak valid'
})
extend('distinct',{
    params: ['target'],
    validate(value, {target}){
        return value !== target
    },
    message: '{_field_} tidak boleh sama dengan {target}'
})


// const required = () => {
//     return extend('required', {
//         ...required,
//         message: "{_field_} harus diisi"
//     })
// }
// const oneOf = (value, list) => {
//     return extend("one_of", {
//         validate(value, list) {
//             return list.indexOf(value) !== -1
//         }, message: "{_field_} harus dipilih"
//     })
// }
// const min = (value) => {
//     return extend("min", {
//         validate(value, { length }) {
//             return value.length >= length;
//         },
//         params: ["length"],
//         message: "{_field_} harus lebih dari {length} digit"
//     });
// }
// const