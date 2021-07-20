//header and footer loader 
 $(document).ready(()=>{
    $('#footer').load('footer.html');
    $('#header').load('header.html');
  })



function introduction() {
  $('#introduction').css('display','block');
  $('#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking ,#other,#moim,#ss,#wo,#poa,#iqacc,#function1,#goalso,#student,#function2').css('display','none');

}
function hodprofile() {
  $('#hod-profile').css('display','block');
  $('#introduction ,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking,#student,#function2').css('display','none');
}
function syllabus() {
  $('#introduction,#hod-profile,#pospeos,#labdetail,#vm,#research,#faculty,#goalso,#gearlever,#dlocking,#student,#function2').css('display','none');
  $('#syllabus').css('display','block');
}
function pospeos() {
  $('#introduction,#hod-profile,#syllabus,#labdetail,#vm,#research,#faculty,#gearlever,#dlocking,#studen,#function2t').css('display','none');
  $('#pospeos').css('display','block');
}
function labdetail() {
  $('#introduction,#hod-profile,#syllabus,#pospeos,#vm,#research,#faculty,#gearlever,#dlocking,#student,#function2').css('display','none');
  $('#labdetail').css('display','block');
}
function vm() {
  $('#introduction,#hod-profile,#syllabus,#pospeos,#labdetail,#research,#faculty,#gearlever,#dlocking,#student,#function2').css('display','none');
  $('#vm').css('display','block');

}
function research() {
  $('#introduction,#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking,#student,#function2').css('display','none');
  $('#research').css('display','block');
}
function faculty() {
  $('#faculty').css('display','block');
  $('#introduction,#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#research,#gearlever,#dlocking,#student,#function2').css('display','none');

}
function function2() {
  $('#function2').css('display','block');
  $('#introduction,#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#research,#gearlever,#dlocking,#student').css('display','none');

}
function gearlever() {
  $('#introduction,#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#research,#faculty,#dlocking,#student,#function2').css('display','none');
  $('#gearlever').css('display','block');


}
function dlocking() {
  $('#introduction,#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#research,#faculty,#gearlever,#student').css('display','none');
  $('#dlocking').css('display','block');


}
function other() {
  $('#other').css('display','block');
  $('#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking ,#introduction,#moim,#ss,#student,#wo,#poa,#iqacc,#function1,#goalso').css('display','none');


}
function moim() {
  $('#moim').css('display','block');
  $('#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking ,#introduction,#other,#ss,#wo,#student,#poa,#iqacc,#function1,#goalso').css('display','none');


}
function ss() {
  $('#ss').css('display','block');
  $('#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking ,#introduction,#other,#moim,#wo,#poa,#student,#iqacc,#function1,#goalso').css('display','none');


}
function wo() {
  $('#wo').css('display','block');
  $('#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking ,#introduction,#other,#moim,#ss,#poa,#iqacc,#student,#function1,#goalso').css('display','none');


}
function poa() {
  $('#poa').css('display','block');
  $('#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking ,#introduction,#other,#moim,#ss,#wo,#iqacc,#function1,#student,#goalso').css('display','none');


}
function iqacc() {
  $('#iqacc').css('display','block');
  $('#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking ,#introduction,#other,#moim,#ss,#wo,#poa,#function1,#goalso,#student').css('display','none');


}
function function1() {
  $('#function1').css('display','block');
  $('#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking ,#introduction,#other,#moim,#ss,#wo,#poa,#iqacc,#goalso,#student').css('display','none');


}
function goalso() {
  $('#goalso').css('display','block');
  $('#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking ,#introduction,#other,#moim,#ss,#wo,#poa,#iqacc,#function1,#student').css('display','none');


}

function student() {
  $('#student').css('display','block');
  $('#hod-profile,#syllabus,#pospeos,#labdetail,#vm,#faculty,#gearlever,#dlocking ,#introduction,#other,#moim,#ss,#wo,#poa,#iqacc,#function1,#goalso').css('display','none');


}


function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
