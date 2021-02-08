import React from 'react';
import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit, ForgetPassText, InvalidText, Label } from './form';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Form.InvalidText = function FormInvalidText({ children, ...restProps }) {
    return <InvalidText {...restProps}>{children}</InvalidText>;
};

Form.ForgetPassText = function FormForgetPassText({ children, ...restProps }) {
    return <ForgetPassText {...restProps}>{children}</ForgetPassText>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>;
};

Form.Label = function FormLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>;
};
