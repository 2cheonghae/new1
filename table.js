// html 내의 table 요소 가져와서 데이터 초기화하기
// 정모형의 도움 잊지말자... 
const tableElements = document.getElementsByClassName("table")[0]

// coordinate data initialization

let rowLength = tableElements.children.length
let colLength = tableElements.children[0].children.length

for (let i = 0 ; i < rowLength ; i++) {
	for (let j = 0 ; j < colLength ; j++) {
		const cellElement = tableElements.children[i].children[j]
		
		cellElement.innerHTML = `(${i}, ${j})`
		cellElement.setAttribute('data-row', i)
		cellElement.setAttribute('data-col', j)

        cellElement.addEventListener('click', function (){
            var row=parseInt(cellElement.dataset.row)
            var col=parseInt(cellElement.dataset.col)
		    caseSelect(row,col)
		    
		console.dir(cellElement)
	})
}


function bg_color(row,col) {
  tableElements.children[row].children[col].classList.toggle('blue')
} 


function case1(row, col)  {
	// (0.0)의 경우 
	if (row + col === 0) {
		bg_color(row, col)
		bg_color(row+1, col)
		bg_color(row, col+1)
	} 

	// (4.0)의 경우 
	else if (row + col === row){
		bg_color(row, col)
		bg_color(row-1, col)
		bg_color(row, col+1)
	}

	// (0.4)의 경우 
	else if (row + col === col){
		bg_color(row, col)
		bg_color(row+1, col)
		bg_color(row, col-1)
	}

	// (4,4)의 경우
	else {
		bg_color(row, col)
		bg_color(row-1, col)
		bg_color(row, col-1)
	}   
}

// (1,1) ~ (3,3) 의 경우 
function case2(row, col) {
  	bg_color(row, col)
  	bg_color(row, col-1)
  	bg_color(row, col+1)
  	bg_color(row-1, col)
  	bg_color(row+1, col)
}


function case3(row, col){
	// (0,1) ~ (0.3)의 경우
    if (row === 0) {
    bg_color(row, col)
    bg_color(row, col-1)
    bg_color(row+1, col)
    bg_color(row, col+1)
  } 
    // (4,1) ~ (4,3)의 경우
    else if (row === 4) {
    bg_color(row, col)
    bg_color(row, col-1)
    bg_color(row, col+1)
    bg_color(row-1, col)
  } 
    // (1,0) ~ (3,0)의 경우
    else if (col === 0) {
    bg_color(row, col)
    bg_color(row+1, col)
    bg_color(row-1, col)
    bg_color(row, col+1)
  } 
    // (1,4) ~ (3,4)의 경우
    else {
    bg_color(row, col)
    bg_color(row, col-1)
    bg_color(row-1, col)
    bg_color(row+1, col)
  }
}

 function caseSelect(row, col){
    
    if((row===0 && (col===0 || col===4)) || (row===4 && (col===0 || col===4))){
        case1(row, col)
    }
    else if(row>0 && row<4 && col>0 && col<4){
        case2(row, col)
    }
    else{
        case3(row, col)
    }
}
}   //민주의 도움 잊지말자... 