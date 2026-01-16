# Connect Waitlist to Google Sheets

You can connect your waitlist form directly to a Google Sheet using Google Apps Script. This requires no backend server.

### Step 1: Create a Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com) and create a new sheet.
2. Name it "LabelSafe Waitlist".
3. In the first row, add headers: `Timestamp` in A1, `Email` in B1.

### Step 2: Add the Script
1. In the Google Sheet, click on **Extensions** > **Apps Script**.
2. Delete any code in the `Code.gs` file and paste the following:

```javascript
var SHEET_NAME = "Sheet1"; // Make sure this matches your sheet tab name

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;

    var data = JSON.parse(e.postData.contents);
    var newRow = headers.map(function(header) {
      if(header === 'Timestamp'){
        return new Date();
      }
      if(header === 'Email'){
        return data.email;
      }
      return '';
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  finally {
    lock.releaseLock();
  }
}
```

### Step 3: Deploy the Script
1. Click the blue **Deploy** button > **New deployment**.
2. Click the specific **Select type** gear icon next to "Select type" and choose **Web app**.
3. Description: `Waitlist API`.
4. **Execute as**: `Me (your email)`.
5. **Who has access**: `Anyone`. (This is crucial so your website can send data).
6. Click **Deploy**.
7. Copy the **Web App URL** (it ends with `/exec`).

### Step 4: Configure Your Website
1. Open `.env.local` in your project root (create it if it doesn't exist).
2. Add your URL:
   ```
   VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Restart your dev server (`npm run dev`).
