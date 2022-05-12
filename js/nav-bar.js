//get menu betn and do animation when user click on
let menuBtn = document.getElementById('menuBtn');
let searchInput = document.getElementById('searchInput');
let cancel = document.getElementById('cancel');

let toggle = false;
let search = false;
search = false;
document.getElementById('searchCancelBlock').classList.remove('flex','justify-between','items-center', 'pt-5');
document.getElementById('cancel').style.display = 'none';
document.getElementById('navbar').style.display = 'block'

menuBtn.addEventListener('click',()=>{
    toggle = !toggle;

    if(toggle == false){
        document.getElementById('responsiveNavBar').style.height = "100%";
        // setTimeout(()=>{
            document.getElementById('responsiveNavBar').style.visibility = "visible";
        // },700)
    }else{
        document.getElementById('responsiveNavBar').style.height = "0px";
        setTimeout(()=>{
            document.getElementById('responsiveNavBar').style.visibility = "hidden";
        },500)
    }
    
});

function searchable(){
    search = true;
    document.getElementById('searchCancelBlock').classList.add('flex','justify-between','items-center', 'pt-5');
    document.getElementById('cancel').style.display = 'block';
    document.getElementById('navbar').style.display = 'none'
    document.getElementById('listBeforeSearch').classList.add('hidden')
    document.getElementById('listAfterSearch').classList.remove('hidden')
}

searchInput.addEventListener('click', searchable);
cancel.addEventListener('click',()=>{
    search = false;
    document.getElementById('searchCancelBlock').classList.remove('flex','justify-between','items-center', 'pt-5');
    document.getElementById('cancel').style.display = 'none';
    document.getElementById('navbar').style.display = 'block'
    document.getElementById('listBeforeSearch').classList.remove('hidden')
    document.getElementById('listAfterSearch').classList.add('hidden')
})