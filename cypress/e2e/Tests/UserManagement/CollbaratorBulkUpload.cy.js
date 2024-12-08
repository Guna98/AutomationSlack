import { CollaboratorBulkUpload } from "../../pages/User_Management/Collaborator_BulkUpload";
import 'cypress-file-upload';


const collaboratorBulkUpload = new CollaboratorBulkUpload();

describe('Login and Collaborator Bulk Upload', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Collaborator Bulk Upload', () => {

        const fileName = 'CollaboratorTemplate.xlsx';

        collaboratorBulkUpload
                .clickUserManagment()
                .clickMultipleCollaborators()
                .chooseFile(fileName)
                .clickNext()
                .clickImport()
    })

})

