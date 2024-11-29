import * as yup from 'yup'


export const addUser = { 
    schema: {
    body: {
        yupSchema: yup.object().shape({
            name: yup.string(),
            email: yup.string().email(),
            city: yup.string(),
            country: yup.string(),
        })
    },
},
};

