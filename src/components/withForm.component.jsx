import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class WithForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }




    render(){
        return (
            <React.Fragment>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>


            </React.Fragment>        
        )

    }
}

export default WithForm