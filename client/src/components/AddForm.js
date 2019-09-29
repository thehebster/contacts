import React, { useState, useEffect } from "react";
import {
	Button,
	Form,
	Grid,
	Header,
	Message,
	Segment
} from "semantic-ui-react";
import "../styles/Form.css";

const AddForm = ({ contact, handleContactChange, addContact }) => {
	return (
		<Grid
			textAlign="center"
			style={{ height: "100vh" }}
			verticalAlign="middle"
		>
			<Grid.Column style={{ maxWidth: 450 }} className="Form">
				<Header as="h2" color="blue" textAlign="center">
					Create a new contact
				</Header>

				<Form size="large" onSubmit={addContact}>
					<Segment stacked>
						<Header textAlign="left" color="black" sub>
							Name
						</Header>
						<Form.Input
							fluid
							icon="wheelchair"
							placeholder="Bo-Bitty-Bob Steggatoxic"
							name="name"
							value={contact.name}
							onChange={handleContactChange}
						/>

						<Header textAlign="left" color="black" sub>
							Phone Number
						</Header>
						<Form.Input
							fluid
							icon="phone square"
							iconPosition="right"
							placeholder="407-412-1234"
							name="number"
							value={contact.number}
							onChange={handleContactChange}
						/>

						<Header textAlign="left" color="black" sub>
							Special Note
						</Header>
						<Form.Input
							fluid
							icon="sticky note"
							iconPosition="right"
							placeholder="Smells just like the retirement home"
							name="note"
							value={contact.note}
							onChange={handleContactChange}
						/>

						<Button color="blue" fluid size="large">
							Add
						</Button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};

export default AddForm;
