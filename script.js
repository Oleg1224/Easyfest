let input = document.querySelector('.search__input');
let svg = document.querySelector('.search__svg');
let block2 = document.getElementById('block2').outerHTML;
let block3 = document.getElementById('block3').outerHTML;
let block4 = document.getElementById('block4').outerHTML;
let block5 = document.getElementById('block5').outerHTML;
let block6 = document.getElementById('block6').outerHTML;
let nameBlock2 = 'Gift';
let nameBlock02 = 'gift'
let nameBlock002 = 'Подарок';
let nameBlock0002 = 'подарок';
let nameBlock3 = 'Easyfest';
let nameBlock03 = 'easyfest';
let nameBlock003 = 'Изифест';
let nameBlock0003 = 'изифест';
let nameBlock4 = 'How it work';
let nameBlock04 = 'how it work';
let nameBlock004 = 'Как это работает';
let nameBlock0004 = 'как это работает'; 
let nameBlock5 = 'Advantages';
let nameBlock05 = 'advantages';
let nameBlock005 = 'Преимущества';
let nameBlock0005 = 'преимущества';
let nameBlock6 = 'Reviews';
let nameBlock06 = 'reviews';
let nameBlock006 = 'Отзывы';
let nameBlock0006 = 'отзывы';
let nameAll = [nameBlock2, nameBlock02, nameBlock002, nameBlock0002, nameBlock3, nameBlock03, nameBlock003, nameBlock0003, nameBlock4, nameBlock04, nameBlock004, nameBlock0004, nameBlock5, nameBlock05, nameBlock005, nameBlock0005, nameBlock6, nameBlock06, nameBlock006, nameBlock0006];
svg.addEventListener('click', function() {
    for(let i = 0; i<nameAll.length; i++) {
        if(input.value===nameAll[i]) {
            switch(nameAll[i]) {
                case nameBlock2:
                    sessionStorage.setItem('block', block2)
                    break;
                case nameBlock02:
                    sessionStorage.setItem('block', block2)
                    break;
                case nameBlock002:
                    sessionStorage.setItem('block', block2)
                    break;
                case nameBlock0002:
                    sessionStorage.setItem('block', block2)
                    break;
                case nameBlock3:
                    sessionStorage.setItem('block', block3)
                    break;
                case nameBlock03:
                    sessionStorage.setItem('block', block3)
                    break;
                case nameBlock003:
                    sessionStorage.setItem('block', block3)
                    break;
                case nameBlock0003:
                    sessionStorage.setItem('block', block3)
                    break;
                case nameBlock4:
                    sessionStorage.setItem('block', block4)
                    break
                case nameBlock04:
                    sessionStorage.setItem('block', block4)
                    break
                case nameBlock004:
                    sessionStorage.setItem('block', block4)
                    break
                case nameBlock0004:
                    sessionStorage.setItem('block', block4)
                    break
                case nameBlock5:
                    sessionStorage.setItem('block', block5)
                    break
                case nameBlock05:
                    sessionStorage.setItem('block', block5)
                    break
                case nameBlock005:
                    sessionStorage.setItem('block', block5)
                    break
                case nameBlock0005:
                    sessionStorage.setItem('block', block5)
                    break
                case nameBlock6:
                    sessionStorage.setItem('block', block6)
                    break
                case nameBlock06:
                    sessionStorage.setItem('block', block6)
                    break
                case nameBlock006:
                    sessionStorage.setItem('block', block6)
                    break
                case nameBlock0006:
                    sessionStorage.setItem('block', block6)
                    break
            }
            window.location.href = './Gift.html' 
            return
        }
    }
    window.location.href = './Error.html'
})
addEventListener('keydown', function() {
    if(event.key === 'Enter') {
        for(let i = 0; i<nameAll.length; i++) {
            if(input.value===nameAll[i]) {
                switch(nameAll[i]) {
                    case nameBlock2:
                        sessionStorage.setItem('block', block2)
                        break;
                    case nameBlock02:
                        sessionStorage.setItem('block', block2)
                        break;
                    case nameBlock002:
                        sessionStorage.setItem('block', block2)
                        break;
                    case nameBlock0002:
                        sessionStorage.setItem('block', block2)
                        break;
                    case nameBlock3:
                        sessionStorage.setItem('block', block3)
                        break;
                    case nameBlock03:
                        sessionStorage.setItem('block', block3)
                        break;
                    case nameBlock003:
                        sessionStorage.setItem('block', block3)
                        break;
                    case nameBlock0003:
                        sessionStorage.setItem('block', block3)
                        break;
                    case nameBlock4:
                        sessionStorage.setItem('block', block4)
                        break
                    case nameBlock04:
                        sessionStorage.setItem('block', block4)
                        break
                    case nameBlock004:
                        sessionStorage.setItem('block', block4)
                        break
                    case nameBlock0004:
                        sessionStorage.setItem('block', block4)
                        break
                    case nameBlock5:
                        sessionStorage.setItem('block', block5)
                        break
                    case nameBlock05:
                        sessionStorage.setItem('block', block5)
                        break
                    case nameBlock005:
                        sessionStorage.setItem('block', block5)
                        break
                    case nameBlock0005:
                        sessionStorage.setItem('block', block5)
                        break
                    case nameBlock6:
                        sessionStorage.setItem('block', block6)
                        break
                    case nameBlock06:
                        sessionStorage.setItem('block', block6)
                        break
                    case nameBlock006:
                        sessionStorage.setItem('block', block6)
                        break
                    case nameBlock0006:
                        sessionStorage.setItem('block', block6)
                        break
                }
                window.location.href = './Gift.html' 
                return
            }
        }
        window.location.href = './Error.html'
        /* alert('Этого не существует!') */
    }
})
let autoPoisc1 = document.querySelector('.auto__poisc-Gift');
autoPoisc1.addEventListener('click', function() {
    window.location.href = './Gift.html'
    sessionStorage.setItem('block', block2)
})
let autoPoisc2 = document.querySelector('.auto__poisc-gift');
let autoPoisc3 = document.querySelector('.auto__poisc-G');
let autoPoisc4 = document.querySelector('.auto__poisc-g');
input.addEventListener('input', function() {
    if(input.value==='G' || input.value==='Gi' || input.value==='Gif') {
        autoPoisc1.classList.add('new')
    }
    else if(input.value==='g' || input.value==='gi' || input.value==='gif') {
        autoPoisc2.classList.add('new')
    }
    else if(input.value==='П' || input.value==='По' || input.value==='Под' || input.value==='Пода' || input.value==='Подар' || input.value==='Подаро') {
        autoPoisc3.classList.add('new')
    }
    else if(input.value==='п' || input.value==='по' || input.value==='под' || input.value==='пода' || input.value==='подар' || input.value==='подаро') {
        autoPoisc4.classList.add('new')
    }
    else {
        autoPoisc1.classList.remove('new')
        autoPoisc2.classList.remove('new')
        autoPoisc3.classList.remove('new')
        autoPoisc4.classList.remove('new')
    }
})
let autoPoiscEasyfest1 = document.querySelector('.auto__poisc-Easyfest');
let autoPoiscEasyfest2 = document.querySelector('.auto__poisc-easyfest');
let autoPoiscEasyfest3 = document.querySelector('.auto__poisc-E');
let autoPoiscEasyfest4 = document.querySelector('.auto__poisc-e');
input.addEventListener('input', function() {
    if(input.value==='E' || input.value==='Ea' || input.value==='Eas' || input.value==='Easy' || input.value==='Easyf' || input.value==='Easyfe' || input.value==='Easyfes') {
        autoPoiscEasyfest1.classList.add('new')
    }
    else if(input.value==='e' || input.value==='ea' || input.value==='eas' || input.value==='easy' || input.value==='easyf' || input.value==='easyfe' || input.value==='easyfes') {
        autoPoiscEasyfest2.classList.add('new')
    }
    else if(input.value==='И' || input.value==='Из' || input.value==='Изи' || input.value==='Изиф' || input.value==='Изифе' || input.value==='Изифес') {
        autoPoiscEasyfest3.classList.add('new')
    }
    else if(input.value==='и' || input.value==='из' || input.value==='изи' || input.value==='изиф' || input.value==='изифе' || input.value==='изифес') {
        autoPoiscEasyfest4.classList.add('new')
    }
    else {
        autoPoiscEasyfest1.classList.remove('new')
        autoPoiscEasyfest2.classList.remove('new')
        autoPoiscEasyfest3.classList.remove('new')
        autoPoiscEasyfest4.classList.remove('new')
    }
})
let autoPoiscHow1 = document.querySelector('.auto__poisc-How');
let autoPoiscHow2 = document.querySelector('.auto__poisc-how');
let autoPoiscHow3 = document.querySelector('.auto__poisc-H');
let autoPoiscHow4 = document.querySelector('.auto__poisc-h');
input.addEventListener('input', function() {
    if(input.value==='H' || input.value==='How' || input.value==='How ' || input.value==='How i' || input.value==='How it' || input.value==='How it ' || input.value==='How it w' || input.value==='How it wo' || input.value==='How it wor') {
        autoPoiscHow1.classList.add('new')
    }
    else if(input.value==='h' || input.value==='how' || input.value==='how ' || input.value==='how i' || input.value==='how it' || input.value==='how it ' || input.value==='how it w' || input.value==='how it wo' || input.value==='how it wor') {
        autoPoiscHow2.classList.add('new')
    }
    else if(input.value==='К' || input.value==='Ка' || input.value==='Как' || input.value==='Как ' || input.value==='Как э' || input.value==='Как эт' || input.value==='Как это' || input.value==='Как это ' || input.value==='Как это р' || input.value==='Как это ра' || input.value==='Как это раб' || input.value==='Как это рабо' || input.value==='Как это работ' || input.value==='Как это работа' || input.value==='Как это работае') {
        autoPoiscHow3.classList.add('new')
    }
    else if(input.value==='к' || input.value==='ка' || input.value==='как' || input.value==='как ' || input.value==='как э' || input.value==='как эт' || input.value==='как это' || input.value==='как это ' || input.value==='как это р' || input.value==='как это ра' || input.value==='как это раб' || input.value==='как это рабо' || input.value==='как это работ' || input.value==='как это работа' || input.value==='как это работае') {
        autoPoiscHow4.classList.add('new')
    }
    else {
        autoPoiscHow1.classList.remove('new')
        autoPoiscHow2.classList.remove('new')
        autoPoiscHow3.classList.remove('new')
        autoPoiscHow4.classList.remove('new')
    }
})
let autoPoiscAdvantages1 = document.querySelector('.auto__poisc-Advantages');
let autoPoiscAdvantages2 = document.querySelector('.auto__poisc-advantages');
let autoPoiscAdvantages3 = document.querySelector('.auto__poisc-A');
let autoPoiscAdvantages4 = document.querySelector('.auto__poisc-a');
input.addEventListener('input', function() {
    if(input.value==='A' || input.value==='Ad' || input.value==='Adv' || input.value==='Adva' || input.value==='Advan' || input.value==='Advant' || input.value==='Advanta' || input.value==='Advantag' || input.value==='Advantage') {
        autoPoiscAdvantages1.classList.add('new')
    }
    else if(input.value==='a' || input.value==='ad' || input.value==='adv' || input.value==='adva' || input.value==='advan' || input.value==='advant' || input.value==='advanta' || input.value==='advantag' || input.value==='advantage') {
        autoPoiscAdvantages2.classList.add('new')
    }
    else if(input.value==='П' || input.value==='Пр' || input.value==='Пре' || input.value==='Преи' || input.value==='Преим' || input.value==='Преиму' || input.value==='Преимущ' || input.value==='Преимуще' || input.value==='Преимущес' || input.value==='Преимущест' || input.value==='Преимуществ') {
        autoPoiscAdvantages3.classList.add('new')
    }
    else if(input.value==='п' || input.value==='пр' || input.value==='пре' || input.value==='преи' || input.value==='преим' || input.value==='преиму' || input.value==='преимущ' || input.value==='преимуще' || input.value==='преимущес' || input.value==='преимущест' || input.value==='преимуществ') {
        autoPoiscAdvantages4.classList.add('new')
    }
    else {
        autoPoiscAdvantages1.classList.remove('new')
        autoPoiscAdvantages2.classList.remove('new')
        autoPoiscAdvantages3.classList.remove('new')
        autoPoiscAdvantages4.classList.remove('new')
    }
})
let autoPoiscReviews1 = document.querySelector('.auto__poisc-Reviews');
let autoPoiscReviews2 = document.querySelector('.auto__poisc-reviews');
let autoPoiscReviews3 = document.querySelector('.auto__poisc-R');
let autoPoiscReviews4 = document.querySelector('.auto__poisc-r');
input.addEventListener('input', function() {
    if(input.value==='R' || input.value==='Re' || input.value==='Rev' || input.value==='Revi' || input.value==='Revie' || input.value==='Review') {
        autoPoiscReviews1.classList.add('new')
    }
    else if(input.value==='r' || input.value==='re' || input.value==='rev' || input.value==='revi' || input.value==='revie' || input.value==='review') {
        autoPoiscReviews2.classList.add('new')
    }
    else if(input.value==='О' || input.value==='От' || input.value==='Отз' || input.value==='Отзы' || input.value==='Отзыв') {
        autoPoiscReviews3.classList.add('new')
    }
    else if(input.value==='о' || input.value==='от' || input.value==='отз' || input.value==='отзы' || input.value==='отзыв') {
        autoPoiscReviews4.classList.add('new')
    }
    else {
        autoPoiscReviews1.classList.remove('new')
        autoPoiscReviews2.classList.remove('new')
        autoPoiscReviews3.classList.remove('new')
        autoPoiscReviews4.classList.remove('new')
    }
})
