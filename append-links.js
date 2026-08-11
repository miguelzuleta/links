append('body', `<p class="loading" bb-label="loading">fetching...</p>`);

let spreadSheetCSV = `https://docs.google.com/spreadsheets/d/${window.csvID}/export?format=csv`;

fetch(spreadSheetCSV).then(data => data.text()).then(data => {
	window.appended.loading.remove();
	
  let linkData = data.split(/\r?\n/);

  let linkList = linkData.map(str => {
    let strData = str.split(',');
    return `<li><a href='${strData[1]}'>${strData[0]}</a></li>`;
  }).join('');

  append('body', `<ul>${linkList}</ul>`);
});
