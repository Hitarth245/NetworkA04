console.log('hello my profile')

const avatarBox = document.getElementById('avatar-box')
const alertBox = document.getElementById('alert-box')
const profileForm = document.getElementById('profile-form')
const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]')

const bioInput = document.getElementById('id_bio')
const avatarInput = document.getElementById('id_avatar')

profileForm.addEventListener('submit', e=>{
    e.preventDefault()

    const formData = new FormData()
    formData.append('csrfmiddlewaretoken', csrfToken)
    formData.append('bio', bioInput.value)
    formData.append('avatar',avatarInput.files[0])

    $.ajax({
        type:'POST',
        url: '',
        enctype: 'multipart/form-data',
        data: formData,
        success: function(response){
            console.log(response)
            avatarBox.innerHTML = `
            <img src="${response.avatar}" class="rounded" height="200px" widht="auto" alt="${response.username}"></img>
            `
            bioInput.value = response.bio
            
            handleAlerts('success','our profile has been updated!')
        },
        error: function(error){
            console.log(error)
        },
        processData: false,
        contentType: false,
        cache: false,

    })


})
