// Today's Date
var now = new Date();
var fileName = 'test-orders' + '(' + now.getMonth() + 1 + '-' + now.getDate() + '-' + now.getFullYear() + ')' + '.json'


var data = $.evalFile ( "/Users/ericsmac/Dropbox/BestiesGiftShop/Scripts/Master-Scripts/JSON/" + fileName); 
// alert(fileName)
$.evalFile ( "/Users/ericsmac/Dropbox/BestiesGiftShop/Scripts/Master-Scripts/JSON/designList/designLetterList.json");
// uploads image to artboard
function imageUpload(file, artboardLayers, sublayer, designFileName) 
{   
    var placedItem = app.activeDocument.layers[artboardLayers].layers[sublayer].placedItems.add();
    placedItem.file = new File('/Users/ericsmac/Dropbox/BestiesGiftShop/Design-Files/Alpha/Components/' + file + '.png');
};
function returnsJsonData(index, rawData) // rawData is data.json
{

    return rawData[index] // each object within data.
    // TEST: alert(rawData[index].size)
};
// reformats the customer's personalizatio data to the correct format if needed.
function personalizationChecker(personalization) 
{

    var formattedPersonalization = personalization.toString().replace(/\s/g,'').split(',') // takes away white spaces
    // If it does not satisfy the format, then it will return a csv sheet that includes all Order ID that doesn't satisfy the format. 
    // returns the correct format for personalizaiton
    return formattedPersonalization
};
// instantiates an object for personalizationChecker(personalization)
function objPersonalization(formattedPersonalization) 
{
    var objPersonalization = 
    {
        jacket : formattedPersonalization[0],
        leftName : formattedPersonalization[1],
        leftHair : formattedPersonalization[2],
        leftArm : formattedPersonalization[3],
        leftLeg : formattedPersonalization[4],
        leftDrink : formattedPersonalization[5],

        rightName : formattedPersonalization[6],
        rightHair : formattedPersonalization[7],
        rightArm : formattedPersonalization[8],
        rightLeg : formattedPersonalization[9],
        rightDrink : formattedPersonalization[10]
    }

    return objPersonalization

};
function skuFormatting(sku) {

    var newSku = sku.split('%')
    
    if (newSku[0].indexOf('AL') == 0 && newSku[1] == 'FP' || newSku[1] == 'MPP' || newSku[1] == 'DP') {
      var designFile = 'AL%GRO-A'
    }
    if (newSku[0].indexOf('AL') == 0 && newSku[1] == 'FOC' || newSku[1] == 'MU' || newSku[1] == 'FLC') {
      var designFile = 'AL%GRO-B'
    }
    if (newSku[0].indexOf('AL') == 0 && newSku[1] == 'PIC' || newSku[1] == 'PIL') {
      var designFile = 'AL%GRO-C'
    }
    
    var designLetter = newSku[0]
    var artBoard = newSku[1] + '%' + newSku[2]
    var orderSku = [designFile, designLetter, artBoard]

    return orderSku
};
function objSku(orderSku) // EX. [ 'AL%GRO-A', 'AL2', 'MPP%GOO-LA-S2' ]
{
    var objSku = 
    {
        designFile : orderSku[0],
        designLetter : orderSku[1],
        artBoard : orderSku[2]

    }
    return objSku

};
function nameChager(text, artboardLayers, sublayer)
{
    app.activeDocument.layers[artboardLayers].layers[sublayer].textFrames[0].words.removeAll()
    app.activeDocument.layers[artboardLayers].layers[sublayer].textFrames[0].words.add(text)
};
function hairChanger(hair, artboardLayers, sublayer, designFileName) {   // Goods: H1, H2, H4, H6, H7, H9, H11, H13, H14 | Bads: H3 (-Z), H5 (+X), H8 (-Z), H10 (+X), H12 (-Z), H15 (-Z), H16 (+X) //
    var oldHair = app.activeDocument.layers[artboardLayers].layers[sublayer].placedItems[0]

    if (designFileName == 'AL%GRO-A' || designFileName == 'AL%GRO-B' || designFileName == 'AL%GRO-C') {
        if (sublayer === 'Left-Hair') {
            var newTempHair = 'L' + hair
            if (newTempHair === 'LH1' || newTempHair === 'LH2' || newTempHair === 'LH3' || newTempHair === 'LH4' || newTempHair === 'LH5' || newTempHair === 'LH6' || newTempHair === 'LH7' || newTempHair === 'LH8' ||
                'LH9' || newTempHair === 'LH10' || newTempHair === 'LH11' || newTempHair === 'LH12' || newTempHair === 'LH13' || newTempHair === 'LH14' || newTempHair === 'LH15' || newTempHair === 'LH16') // BASE
            {
                var newHair = new File('/Users/ericsmac/Dropbox/BestiesGiftShop/Design-Files/Alpha/Components/' + newTempHair + '.png') // remember to change path if needed.
                oldHair.relink(newHair)
                // oldHair.translate(0, -22, true, true, true, true)
                // oldHair.resize(100, 100, true, true, true, true, 0) // each iteration, it will resize the placed item
            };
        };
        if (sublayer === 'Right-Hair') {
            var newTempHair = 'R' + hair
            if (newTempHair === 'RH1' || newTempHair === 'RH2' || newTempHair === 'RH3' || newTempHair === 'RH4' || newTempHair === 'RH5' || newTempHair === 'RH6' || newTempHair === 'RH7' || newTempHair === 'RH8' ||
                'RH9' || newTempHair === 'RH10' || newTempHair === 'RH11' || newTempHair === 'RH12' || newTempHair === 'RH13' || newTempHair === 'RH14' || newTempHair === 'RH15' || newTempHair === 'RH16') // BASE
            {
                var newHair = new File('/Users/ericsmac/Dropbox/BestiesGiftShop/Design-Files/Alpha/Components/' + newTempHair + '.png') // remember to change path if needed.
                oldHair.relink(newHair)
                // oldHair.translate(0, -22, true, true, true, true)
                // oldHair.resize(100, 100, true, true, true, true, 0) // each iteration, it will resize the placed item
            };
        };

    };
};
function legChanger(leg, artboardLayers, sublayer, designFileName) 
{
    var oldLeg = app.activeDocument.layers[artboardLayers].layers[sublayer].placedItems[0]

    if (designFileName == 'AL%GRO-A' || designFileName == 'AL%GRO-B' || designFileName == 'AL%GRO-C')
    {
        if (leg === 'L1' || leg === 'L2' || leg === 'L3' || leg === 'L4' || leg === 'L5' || leg === 'L6' || leg === 'L7') 
        {
            var newLeg = new File('/Users/ericsmac/Dropbox/BestiesGiftShop/Design-Files/Alpha/Components/' + leg + '.png') // remember to change path if needed.
            oldLeg.relink(newLeg)
        };
    };
};
function sizeChanger(leg, artboardLayers, sublayer, designFileName) {
    pass
};
function armChanger(arm, artboardLayers, sublayer, designFileName) 
{
    var oldArm = app.activeDocument.layers[artboardLayers].layers[sublayer].placedItems[0]
    if (designFileName == 'AL%GRO-A' || designFileName == 'AL%GRO-B' || designFileName == 'AL%GRO-C') {
        if (sublayer === 'Left-Arm') {
            var newLeftTempArm = 'L' + arm

            
            if (newLeftTempArm === 'LA1' || newLeftTempArm === 'LA2' || newLeftTempArm === 'LA3' || newLeftTempArm === 'LA4' || newLeftTempArm === 'LA5' || newLeftTempArm === 'LA6') {

                var newArm = new File('/Users/ericsmac/Dropbox/BestiesGiftShop/Design-Files/Alpha/Components/' + newLeftTempArm + '.png') // remember to change path if needed.
                oldArm.relink(newArm)
                oldArm.translate(0, 0, true, true, true, true)
                oldArm.resize(100, 100, true, true, true, true, 0)
                
            };
        };
        if (sublayer === 'Right-Arm') {
                
            var newRightTempArm = 'R' + arm
            if (newRightTempArm === 'RA1' || newRightTempArm === 'RA2' || newRightTempArm === 'RA3' || newRightTempArm === 'RA4' || newRightTempArm === 'RA5' || newRightTempArm === 'RA6') {
                var newArm = new File('/Users/ericsmac/Dropbox/BestiesGiftShop/Design-Files/Alpha/Components/' + newRightTempArm + '.png') // remember to change path if needed.
                oldArm.relink(newArm)
                oldArm.translate(0, 0, true, true, true, true)
                oldArm.resize(100, 100, true, true, true, true, 0)
            };
        };
    };
};
function jacketChanger(jacket, artboardLayers, sublayer, designFileName) {
    var oldJacket = app.activeDocument.layers[artboardLayers].layers[sublayer].placedItems[0]

    if (designFileName == 'AL%GRO-A' || designFileName == 'AL%GRO-B' || designFileName == 'AL%GRO-C')
    {
        if (jacket === 'J1' || jacket === 'J2' || jacket === 'J3' || jacket === 'J4' || jacket === 'J5' || jacket === 'J6' || jacket === 'J7') 
        {
            var newJacket = new File('/Users/ericsmac/Dropbox/BestiesGiftShop/Design-Files/Alpha/Components/' + jacket + '.png') // remember to change path if needed.
            oldJacket.relink(newJacket)
        };
    };
};
function drinkAndArmChanger(drink, arm, artboardLayers, sublayer, designFileName) {

    var oldArmDrink = app.activeDocument.layers[artboardLayers].layers[sublayer].placedItems[0]
    if (designFileName == 'AL%GRO-A' || designFileName == 'AL%GRO-B' || designFileName == 'AL%GRO-C') {

        if (sublayer === 'Right-Arm-Drink') {
 
            var tempArm = 'R' + arm
            var tempArmDrink = drink + '-' + tempArm

            if (tempArmDrink === 'D0-RA1' || tempArmDrink === 'D0-RA2' || tempArmDrink === 'D0-RA3' || tempArmDrink === 'D0-RA4' || tempArmDrink === 'D0-RA5' || tempArmDrink === 'D0-RA6' ||
                tempArmDrink === 'D1-RA1' || tempArmDrink === 'D1-RA2' || tempArmDrink === 'D1-RA3' || tempArmDrink === 'D1-RA4' || tempArmDrink === 'D1-RA5' || tempArmDrink === 'D1-RA6' ||
                tempArmDrink === 'D2-RA1' || tempArmDrink === 'D2-RA2' || tempArmDrink === 'D2-RA3' || tempArmDrink === 'D2-RA4' || tempArmDrink === 'D2-RA5' || tempArmDrink === 'D2-RA6' ||
                tempArmDrink === 'D3-RA1' || tempArmDrink === 'D3-RA2' || tempArmDrink === 'D3-RA3' || tempArmDrink === 'D3-RA4' || tempArmDrink === 'D3-RA5' || tempArmDrink === 'D3-RA6' ||
                tempArmDrink === 'D4-RA1' || tempArmDrink === 'D4-RA2' || tempArmDrink === 'D4-RA3' || tempArmDrink === 'D4-RA4' || tempArmDrink === 'D4-RA5' || tempArmDrink === 'D4-RA6' ||
                tempArmDrink === 'D5-RA1' || tempArmDrink === 'D5-RA2' || tempArmDrink === 'D5-RA3' || tempArmDrink === 'D5-RA4' || tempArmDrink === 'D5-RA5' || tempArmDrink === 'D5-RA6') {

                var newArmDrink = new File('/Users/ericsmac/Dropbox/BestiesGiftShop/Design-Files/Alpha/Components/' + tempArmDrink + '.png') // remember to change path if needed.
                oldArmDrink.relink(newArmDrink)
                // oldArm.translate(0, 0, true, true, true, true)
                // oldArm.resize(100, 100, true, true, true, true, 0)
            };
        };
        if (sublayer === 'Left-Arm-Drink') {
 
            var tempArm = 'L' + arm
            var tempArmDrink = drink + '-' + tempArm

            if (tempArmDrink === 'D0-LA1' || tempArmDrink === 'D0-LA2' || tempArmDrink === 'D0-LA3' || tempArmDrink === 'D0-LA4' || tempArmDrink === 'D0-LA5' || tempArmDrink === 'D0-LA6' ||
                tempArmDrink === 'D1-LA1' || tempArmDrink === 'D1-LA2' || tempArmDrink === 'D1-LA3' || tempArmDrink === 'D1-LA4' || tempArmDrink === 'D1-LA5' || tempArmDrink === 'D1-LA6' ||
                tempArmDrink === 'D2-LA1' || tempArmDrink === 'D2-LA2' || tempArmDrink === 'D2-LA3' || tempArmDrink === 'D2-LA4' || tempArmDrink === 'D2-LA5' || tempArmDrink === 'D2-LA6' ||
                tempArmDrink === 'D3-LA1' || tempArmDrink === 'D3-LA2' || tempArmDrink === 'D3-LA3' || tempArmDrink === 'D3-LA4' || tempArmDrink === 'D3-LA5' || tempArmDrink === 'D3-LA6' ||
                tempArmDrink === 'D4-LA1' || tempArmDrink === 'D4-LA2' || tempArmDrink === 'D4-LA3' || tempArmDrink === 'D4-LA4' || tempArmDrink === 'D4-LA5' || tempArmDrink === 'D4-LA6' ||
                tempArmDrink === 'D5-LA1' || tempArmDrink === 'D5-LA2' || tempArmDrink === 'D5-LA3' || tempArmDrink === 'D5-LA4' || tempArmDrink === 'D5-LA5' || tempArmDrink === 'D5-LA6') {

                var newArmDrink = new File('/Users/ericsmac/Dropbox/BestiesGiftShop/Design-Files/Alpha/Components/' + tempArmDrink + '.png') // remember to change path if needed.
                oldArmDrink.relink(newArmDrink)
                // oldArm.translate(0, 0, true, true, true, true)
                // oldArm.resize(100, 100, true, true, true, true, 0)
            };
        };  
    };
};
function exportOptions(orderid, designLetter, artboardLayers) 
{ 


    if (artboardLayers.indexOf('DP') == 0) {

        var exportedFileName = now.getMonth() + 1 + '-' + now.getDate() + '-' + now.getFullYear()

        var exportOptions = new ExportOptionsJPEG();
        var type = ExportType.JPEG;
        var fileSpec = new File('//Users/ericsmac/Dropbox/BestiesGiftShop/Order-Files/Orders/' + exportedFileName + '/' + orderid + '-' + lineItem + '%' + designLetter + '%' + artboardLayers + '.png');
        exportOptions.antiAliasing = true;
        exportOptions.qualitySetting = 70;
        exportOptions.artBoardClipping = true; 
        app.activeDocument.exportFile( fileSpec, type, exportOptions );
    };

    if (artboardLayers.indexOf('MPP') == 0 || artboardLayers.indexOf('MU') == 0 || artboardLayers.indexOf('PIL') == 0 || artboardLayers.indexOf('PIC') == 0) {

        // alert('Export is working')
        var exportedFileName = now.getMonth() + 1 + '-' + now.getDate() + '-' + now.getFullYear()

        var exportOptions = new ExportOptionsPNG24(); 
        var type = ExportType.PNG24;
        var fileSpec = new File('//Users/ericsmac/Dropbox/BestiesGiftShop/Order-Files/Orders/' + exportedFileName + '/' + orderid + '-' + lineItem + '%' + designLetter + '%' + artboardLayers + '.png');
        exportOptions.antiAliasing = true;
        exportOptions.transparency = true;
        exportOptions.saveAsHTML = true;
        exportOptions.artBoardClipping = true;
        app.activeDocument.exportFile( fileSpec, type, exportOptions );
    };

};
function letterChanger(designType, designLetter, artboardLayers) 
{
    if (designType === 'Alpha')
    {
        var alphaIndex = 0;
        for (alphaIndex ; alphaIndex < Alpha.length ; alphaIndex++)
        {
            
 
            if (designLetter == Alpha[alphaIndex].designSku)
            {

                var text = Alpha[alphaIndex].letter;
                var sublayer = 'Texts'
                nameChager(text, artboardLayers, sublayer)
            }
        }
    };

    if (designType === 'Bravo')
    {
        var bravoIndex = 0;
        for (bravoIndex ; bravoIndex < Bravo.length ; bravoIndex++)
        {
            if (designLetter === Bravo[bravoIndex].designSku)
            {
                var text = Bravo[bravoIndex].letter;
                var sublayer = 'Texts'
                nameChager(text, artboardLayers, sublayer)
            }
        }
    };

    if (designType === 'Charlie')
    {
        var charlieIndex = 0;
        for (charlieIndex ; charlieIndex < Charlie.length ; charlieIndex++)
        {
            if (designLetter === Charlie[charlieIndex].designSku)
            {
                var text = Charlie[charlieIndex].letter;
                var sublayer = 'Texts'
                nameChager(text, artboardLayers, sublayer)
            }
        }
    };


};
function openFile(designFileName)
{
    if (designFileName.indexOf('AL') == 0)  {
        var designFilePath = new File('/Users/ericsmac/Dropbox/BestiesGiftShop/Design-Files/' + 'Alpha' + '/' + designFileName + '.ai')
    }
    app.open(designFilePath, DocumentColorSpace.RGB)
};
function documentPresets() {
    var presets = app.startupPresetsList;
    var preset = presets[0];
    var docPreset = new DocumentPreset();

    docPreset.colorMode = DocumentColorSpace.RGB;
    docPreset.rasterResolution = DocumentRasterResolution.HighResolution;

    var doc = app.activeDocument(preset, docPreset,false);
};
function closeFile(index)
{
    numberOfOrders = rawData.length;
    less = numberOfOrders - 1;

    if (index == less)
    {
        for (indexOfDocument = 0 ; indexOfDocument < app.documents.length ; indexOfDocument++)
    
        {
            aiDocument = app.documents[indexOfDocument]; 
            aiDocument.close( SaveOptions.DONOTSAVECHANGES ); 
            aiDocument = null;
        }
    
        aiDocument = app.activeDocument; 
        aiDocument.close( SaveOptions.DONOTSAVECHANGES ); 
        aiDocument = null;
    }



};
function setArtboardIndex(artboardLayers)
{
    h = 0;
    lengthOfDocument = app.activeDocument.artboards.length
    for (h ; 0 < lengthOfDocument ; h++)
    {
        var nameOfArtboard = app.activeDocument.artboards[h].name 
        if (artboardLayers == nameOfArtboard)
        {
            app.activeDocument.artboards.setActiveArtboardIndex(h)
            break
        }
    }
    
};
function count(rawData)
{
    var alphaCount = 0; var bravoCount = 0;
    var countList =[];
    var start = 0;
    for (start ; start < rawData.length ; start++)
    {
        
        if (rawData[start].sku.indexOf('Alpha') == 0)
        {
            alphaCount++;
        }
        if (rawData[start].sku.indexOf('Bravo') == 0)
        {
            bravoCount++;
        }   
    
    }

var designCountList = [{ nameOfDesign : 'Alpha', count : alphaCount}, { nameOfDesign : 'Bravo', count : bravoCount}];
return designCountList;

};
function objVariationChanger()
{

};
function textChanger(artboardLayers, designLetter) {

    for (subIndex = 0 ; subIndex < Alpha.length ; subIndex++) {

        var text = Alpha[subIndex].letter
        var parentDesignSku = Alpha[subIndex].parentDesignSku
        var designSku = Alpha[subIndex].designSku
        if (designSku == designLetter) {
            app.activeDocument.layers[artboardLayers].layers['Texts'].textFrames[0].convertPointObjectToAreaObject()
            app.activeDocument.layers[artboardLayers].layers['Texts'].textFrames[0].paragraphs.removeAll()
            app.activeDocument.layers[artboardLayers].layers['Texts'].textFrames[0].paragraphs.add(text)
            app.activeDocument.layers[artboardLayers].layers['Texts'].textFrames[0].paragraphs[0].paragraphAttributes.justification = Justification.CENTER
            app.activeDocument.layers[artboardLayers].layers['Texts'].textFrames[0].paragraphs[0].paragraphAttributes.hyphenation = false
            var message = 'successfully changed text'
            return message

        }
    
    
    }

}

var rawData = data

for (index = 0 ; index < rawData.length ; index++ ) { 
    // indexing through list of objects in the JSON data to capture personalization property
    var personalization = returnsJsonData(index, rawData).personalization; 
    // reformatting personalization data 
    var formattedPersonalization = personalizationChecker(personalization);
    // instantiating new object with variations in personalization.
    returnsJsonData(index, rawData).personalization = objPersonalization(formattedPersonalization); 




    
    var jacket = rawData[index].personalization.jacket
    var leftName = rawData[index].personalization.leftName;
    var leftHair = rawData[index].personalization.leftHair;
    var leftArm = rawData[index].personalization.leftArm;
    var leftLeg = rawData[index].personalization.leftLeg;
    var leftDrink = rawData[index].personalization.leftDrink;
    var rightName = rawData[index].personalization.rightName;
    var rightHair = rawData[index].personalization.rightHair;
    var rightArm = rawData[index].personalization.rightArm;
    var rightLeg = rawData[index].personalization.rightLeg;
    var rightDrink = rawData[index].personalization.rightDrink;

    var sku = returnsJsonData(index, rawData).sku;
    var formattedSku = skuFormatting(sku);
    returnsJsonData(index, rawData).sku = objSku(formattedSku);








    var designFileName = rawData[index].sku.designFile; 
    var designLetter = rawData[index].sku.designLetter; 
    var artboardLayers = rawData[index].sku.artBoard; 
    var lineItem = rawData[index].line; 
    var orderid = returnsJsonData(index, rawData).orderid;





    openFile(designFileName); setArtboardIndex(artboardLayers); 
    
    jacketChanger(jacket, artboardLayers, 'Jacket', designFileName);
    hairChanger(leftHair, artboardLayers, 'Left-Hair', designFileName);
    hairChanger(rightHair, artboardLayers, 'Right-Hair', designFileName);
    nameChager(leftName, artboardLayers, 'Left-Name');
    nameChager(rightName, artboardLayers, 'Right-Name');
    textChanger(artboardLayers, designLetter)
    legChanger(leftLeg, artboardLayers, 'Left-Leg', designFileName);
    legChanger(rightLeg, artboardLayers, 'Right-Leg', designFileName);

    drinkAndArmChanger(rightDrink, rightArm, artboardLayers, 'Right-Arm-Drink', designFileName);
    drinkAndArmChanger(leftDrink, leftArm, artboardLayers, 'Left-Arm-Drink', designFileName);







    exportOptions(orderid, designLetter, artboardLayers);
};



/* 
Orderdesk ---> Download ---> csv-to-json.js ---> /JSON (Dropbox) | masterScript.js --->  Adobe Illustrator Export ---> /Order-Files (Dropbox)
/Order-Files ---> url-retriever (Zapier) --->  Orders-Media-Link (Google Drive) ---> /Order-Sheets ---> .xlsx
*/
