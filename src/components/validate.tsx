import React, { useState } from 'react'

type Props = {
    email: string;
};

const validate = (props: Props) => {
    //validate email
    if (!props.email) {
        return (
            <div>no prop</div>
        )
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(props.email)) {
        return (
            <div>not a valid email</div>
        )
    } else {
        return (
            <div>email is valid</div>
        )
    }

}

export default validate