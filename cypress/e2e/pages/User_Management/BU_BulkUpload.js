export class BU_BulkUpload {

    user_managment = '#user-management > .chakra-link'
    multiple_business_units = '#multipleBusinessUnitOnBoardingTarget'
    choose_file = 'button[class="chakra-button css-9iunge"]'
    click_next = 'button[class="chakra-button css-qk3wsl"]'
    //click_import = 'button[class="chakra-button css-qk3wsl"]'
    click_import = 'button:contains("Import")'



    clickUserManagment(){
       cy.get(this.user_managment).click()
       return this
   }

   clickMultipleBusinessUnits(){
       cy.get(this.multiple_business_units).click()
       return this
   }

   chooseFile(filePath) {
    cy.get(this.choose_file).then($button => {
        cy.wrap($button).click()
        cy.get('input[type="file"]').attachFile(filePath)
    })
    return this
}

clickNext(){
    cy.get(this.click_next).click()
    return this
}

clickImport(){
    this.scrollDown()
    cy.get(this.click_import).click()
    return this
}

scrollDown() {
    cy.scrollTo('bottom', { ensureScrollable: false }) // Scrolls to the bottom of the page without scrollable check
    return this
}



}