import { BU_BulkUpload } from "../../pages/User_Management/BU_BulkUpload";
import 'cypress-file-upload';


const bu_BulkUpload = new BU_BulkUpload();

describe('Login and Business Units Bulk Upload', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Business untis Bulk Upload', () => {

        const fileName = 'BusinessUnitTemplate.xlsx';

        bu_BulkUpload
                .clickUserManagment()
                .clickMultipleBusinessUnits()
                .chooseFile(fileName)
                .clickNext()
                .clickImport()
    })

})

