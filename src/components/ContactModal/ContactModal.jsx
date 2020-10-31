import React from 'react';
import './ContactModal.scss';
import { Button, Modal, Form, TextArea, Icon } from 'semantic-ui-react';

const ContactModal = ({modalOpen, setModalOpen}) => {
	return (
		<Modal
			onClose={() => setModalOpen(false)}
			open={modalOpen}
		>
			<Modal.Header className='modalHeader'>Contanos que necesitas</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<Form>
						<TextArea placeholder='Hola, mi nombre es Javier. Soy técnico electrónico y necesito una estructura para una placa electronica de 20x15cm que sea de plástico resistente y tenga 3 orificios de 5mm de diámetro para LEDs.' 
						className='modalTextArea'/>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions className='modalActions'>
				<Button
					content="Contratar un modelador"
					labelPosition="right"
					icon="checkmark"
					primary
				/>
				<p className='warningMessage'>
					No ingreses datos de contacto personales. Ej: Numero de teléfono, mail
				</p>
			</Modal.Actions>
		</Modal>
	);
};

export default ContactModal;
