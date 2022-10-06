// get documents

auth.onAuthStateChanged((user)=> {
    if(user) {
      document.querySelector('.dynamics').style.display = "block";
      document.querySelector('.showcase').style.display = "block";
      // document.querySelector('.showcase').style.position = "relative";
      page.changeState(new homePage);
        function donateState() {
        
            page.pageRender.innerHTML = `
            <div class="donate-state">
            <div class="container-">
            <h2>Donation</h2>
        
              <h4>Your Recent Donation <span><i class="fa fa-donate"></i></span></h4>
              <h1 id="balance">$0.00</h1>
              
              <form id="form-">
              
                <input type="text" placeholder="First Name" id="fname" readonly/>
        
                <input type="text" placeholder="Last Name" id="lname" readonly/>
                <input type="text" placeholder="Email" id="email" readonly/>
                <input type="text" placeholder="Access-key" id="access-key" readonly/>
                <input type="number" placeholder="Amount Paid"  id="amount" />
                <input type="number" placeholder="Phone number"  id="phone" readonly/>
                <input type="submit" value="Comfirm Donation" class="done" id="done"/>
              </form>
            </div>
            <div class="rules">
                <h3>Make Payment &#8358</h3>
                <ul>
                    <li>Accout Name : SIR JERRY AND LADY COMFORT FOUNDATION</li>
                    <li>Account Number : 0809234961</li>
                    <li>Bank Name <i class="fa fa-bank"></i>: Access Bank</li>
                </ul>
                <p>For more information call : <a href="tel:+2347058032078"><i class="fa fa-phone"></i> +2347058032078
                </a>
                <a href="sms:+2347058032078"><i class="fa fa-envelope"></i> sms
                </a>
            </div>
            </div>
            `;
            // create new guide
            const createForm = document.querySelector('#form-');
            document.querySelector('form#form- #email').value = `${user.email}`;
            createForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const now = new Date();
            if(createForm["access-key"].value !== "") {
              db.collection('users').doc(`${user.uid}`).update({
                paid: createForm.amount.value,
                }).then(() => {
              // close the create modal & reset form
              createForm.amount.style.display = "none";
              createForm.email.style.display = "none";
              createForm.phone.style.display = "none";
              createForm.fname.style.display = "none";
              createForm.lname.style.display = "none";
              createForm.done.style.display = "none";
              createForm["access-key"].style.display = "none";
              
              createForm.reset();
              }).catch(err => {
                  console.log(err.message);
              });
            }
            
            });
        }
        
        console.log("User logged in")
        navActionElements.addEventListener('click', (e)=> {
            e.preventDefault();
            if(e.target.id === "dashboard") {
                document.querySelector('.main-menu').classList.toggle('show')
                db.collection('users').onSnapshot(snapshot => {
                    setUp(snapshot.docs);
                  });
                  
            } if(e.target.id === "donate") {
                document.querySelector('.main-menu').classList.toggle('show')
                page.changeState(new donateState);
                db.collection('users').onSnapshot(snapshot => 
                  {
                    snapshot.forEach((doc) => {
                      console.log(user.uid);
                        if(doc.id === user.uid) {
                      console.log(doc.id);

                          if(doc.data().accesskey) {
                            document.querySelector("input#lname").value = doc.data().firstname;
                            document.querySelector("input#fname").value = doc.data().lastname;
                            document.querySelector("input#email").value = user.email;
                            document.querySelector("input#phone").value = doc.data().phoneNumber;
                            document.querySelector('h1#balance').innerHTML = `<span>&#8358</span> ${doc.data().paid}.00`;
                            document.querySelector("input#access-key").value = doc.data().accesskey;
                          } else {
                            document.querySelector('h1#balance').innerHTML = `<span>&#8358</span> 0.00`;
                            document.querySelector("input#access-key").value = "Make Payment First...";
                          }
                      }
                    })
                    
                  
            })
            
          }
        });
        setupUi(user);
        let getStarted = document.querySelector("a.started");
                      getStarted.addEventListener('click', (e)=> {
                        e.preventDefault();
                page.changeState(new donateState);
                db.collection('users').onSnapshot(snapshot => 
                  {
                    snapshot.forEach((doc) => {
                        if(doc.id === user.uid) {
                          if(doc.data().accesskey) {
                            document.querySelector("input#lname").value = doc.data().firstname;
                            document.querySelector("input#fname").value = doc.data().lastname;
                            document.querySelector("input#email").value = user.email;
                            document.querySelector("input#phone").value = doc.data().phoneNumber;
                            document.querySelector('h1#balance').innerHTML = `<span>&#8358</span> ${doc.data().paid}.00`;
                            document.querySelector("input#access-key").value = doc.data().accesskey;
                          } else {
                            document.querySelector('h1#balance').innerHTML = `<span>&#8358</span> 0.00`;
                            document.querySelector("input#access-key").value = "Make Payment First...";
                          }
                      }
                    })
                    
                  
            })
                        console.log('This is working');
                        // page.changeState(new donateState);
                    },0);
            // activities
              
          function activityState() {
            page.pageRender.innerHTML = `
            <section>
              <div class="title activity">
                <h1>Our Activities <i class="fa fa-calendar"></i></h1>
                <p>
                  Our recent updates and testimonies
                </p>
                <div class="events">
                    <div>
                    <video src="empower.mp4" controls loop autoplay></video>
                    <p class="video-des">
                        Youth Empowerment : 
                        <br>
                        Empowering the youths with skills for self reliance is a key to building the sustainable foundation of the 
                        youth.
                        <br>
                        To become part of this scheme, call us today or message us below...
                        <a href="tel:+234805014070"><i class="fa fa-phone"></i>+ Call Us Now</a>
                        <a href="sms:+234805014070"><i class="fa fa-envelope"></i> sms</a>

                    </p>
                    </div>
                    <div>
                    <video src="Ending poverty and hunger.mp4" controls loop autoplay></video>
                    <p class="video-des">
                      Ending poverty and hunger : 
                        <br>
                        Sir Jerry and Lady Comfort Foundation has taken it as an optimum priorty, the fight against
                        pverty by  
                        poverty rate reduction. We reach out to the less priviledged in the communities, provides facilities
                        to aid livelihood.
                        youth.
                        <br>
                        Support us  this scheme. Call us today or message us...
                        <a href="tel:+234805014070"><i class="fa fa-phone"></i>+ Call Us Now</a>
                        <a href="sms:+234805014070"><i class="fa fa-envelope"></i> sms</a>
                    </p>
                    </div>
                </div>
              <div class="portfolio">
                <h2>Testimonials <i class="fa fa-comments"></i></h2>
                <div class="msg-"></diV>
              <a class="comment' href="#">
              <form class="add-comments">
                  <input type="text" placeholder = "name" id="name" readonly>
                  <textarea name="msg" id="msg" cols="30" rows="10" placeholder = "add comments here!"></textarea>
                  <input type="submit" value="Comment">
              </form>
              </div>
            </section>
            `;
            db.collection('comments').orderBy('name').onSnapshot(snapshot => {
              let changes = snapshot.docChanges();
              let html;
              changes.forEach((change)=> {
                if(change.type === "added") {
                  html = `
                  <ul>
                    <li id=${change.doc.id}><span class="name">${change.doc.data().name} <i class="fa fa-user"></i></span> <span class="delete"><i class="fa fa-trash"></i> Delete</span>
                      <br>
                      <p>
                        ${change.doc.data().msg}
                      </p>
                    </li>
                  </ul>
                  `;
                  document.querySelector('div.msg-').innerHTML += html;
                } 
              })
            });
            db.collection('users').onSnapshot(snapshot => 
              {
                snapshot.forEach((doc) => {
                  console.log(doc.data().id);

                  if(doc.id === user.uid) {
                    console.log(doc.data().id);
                    document.querySelector('form.add-comments #name').value = doc.data().lastname;
                  }
                })
              })
            let addComment = document.querySelector("form.add-comments");
            console.log(addComment);
            addComment.addEventListener('submit', (e)=> {
              e.preventDefault();
              
                if(addComment.name.value !== "" && addComment.msg.value !== "") {
                  e.preventDefault();
                db.collection('comments').add({
                  name:addComment.name.value,
                  msg:addComment.msg.value
                });
                addComment.msg.value = "";
                }
            },0);
            document.querySelector("div.msg-").addEventListener('click', (e)=> {
              if(e.target.className === "delete") {
                let id = e.target.parentElement.getAttribute('id');
                db.collection('comments').doc(id).delete();
                let li = e.target.parentElement;
                li.remove();
              }
            }, 0);
          }
          document.querySelector("#join-").addEventListener('click', (e)=> {
            activityState();
          })
          document.querySelector("#activities").addEventListener('click', (e)=> {
            activityState();
          document.querySelector('.main-menu').classList.toggle('show');

          })
    } else {
      
      document.querySelector('.dynamics').style.display = "block";
        page.changeState(new loginState);       
        document.querySelector('.showcase').style.display = "none";
        setupUi();
        console.log("User Logged Out")
    }
});
function signUpUser() {
    const signupForm = document.querySelector('#register-');
    signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // get user info
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    // sign up the user
    // sign up the user & add firestore data
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        id:cred.user.uid,
        phoneNumber: signupForm['phone-num'].value,
        name: signupForm['lname'].value + "_" + signupForm['fname'].value,
      });
    }).then(() => {
      feedBack(document.querySelector("#register-"), "Form Submitted", "correct")

    // close the signup modal & reset form
    signupForm.reset();
    location.reload();
  }).catch((err)=> {
    feedBack(document.querySelector("#register-"), err.message, "error")
  })
});
}
// logout 
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

function LoginIn() {
    // login
  const loginForm = document.querySelector('#login-');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
  // get user info
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;
  
  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    feedBack(document.querySelector("#login-"), "Form Submitted", "correct")
    // close the signup modal & reset form
    loginForm.reset();
    page.changeState(new homePage);
    location.reload();
  }).catch((err)=> {
    feedBack(document.querySelector("#login-"), err.message, "error");
  })
});
}
