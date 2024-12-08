import { Sub_BU_BulkUpload } from "../../pages/User_Management/Sub_BU_BulkUpload";
import 'cypress-file-upload';


const sub_bu_BulkUpload = new Sub_BU_BulkUpload();

describe('Login and Sub Business Units Bulk Upload', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Sub Business units Bulk Upload', () => {

        const fileName = 'SubBusinessUnitTemplate.xlsx';

        sub_bu_BulkUpload
                .clickUserManagment()
                .clickMultipleBusinessUnits()
                .chooseFile(fileName)
                .clickNext()
                .clickImport()
    })

})

