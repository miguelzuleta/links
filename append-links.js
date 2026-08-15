append('body', `<p class="loading" bb-label="loading">loading...</p>`);

let spreadSheetCSV = `https://docs.google.com/spreadsheets/d/${window.csvID}/export?format=csv`;

fetch(spreadSheetCSV).then(data => data.text()).then(data => {
  window.appended.loading.remove();

  let linkList = data.split(/\r?\n/).map(str => {
    let strData = str.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(str => str.replace(/^"|"$/g, ''));
    return `<li><a href='${strData[1]}'>${strData[0]}</a></li>`;
  }).join('');

  append('body', `<ul>${linkList}</ul>`);
});
