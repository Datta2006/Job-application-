let l = 1;

        function update() {
            const slides = [
                {src: "nvdia.png", label: "NVIDIA", count: "1 of 4"},
                {src: "amazon.jpg", label: "Amazon", count: "2 of 4"},
                {src: "google.jpeg", label: "Google", count: "3 of 4"},
                {src: "flipkart.png", label: "Flipkart", count: "4 of 4"}
            ];

            const slide = slides[l - 1];
            document.getElementById("slide").src = slide.src;
            document.getElementById("sl").innerText = slide.label;
            document.getElementById("s").innerText = slide.count;
        }

        function counter() {
            if (l < 4) {
                l = l + 1;
            } else {
                l = 1;
            }
            update();
        }

        function sub() {
            if (l > 1) {
                l--;
            } else {
                l = 4;
            }
            update();
        }

        function amazon() {
            document.getElementById("am").innerText = 
                "Amazon is looking for a Web Developer with 3+ years of experience in HTML, CSS, JavaScript, React, and AWS.";
            const link = document.getElementById("aml");
            link.href = "https://www.amazon.jobs/en/landing_pages/online-application";
            link.innerText = "Apply Here";
            link.target = "_blank";
        }
amazon();
google();
microsoft();
flipkart();
apple();
ibm();

        function google() {
            document.getElementById("go").innerText = 
                "Google is hiring a Software Engineer with expertise in cloud computing and Python.";
            const link = document.getElementById("gol");
            link.href = "https://careers.google.com";
            link.innerText = "Apply Here";
            link.target = "_blank";
        }

        function microsoft() {
            document.getElementById("ms").innerText = 
                "Microsoft is seeking a Cloud Architect with hands-on experience in Azure.";
            const link = document.getElementById("msl");
            link.href = "https://careers.microsoft.com";
            link.innerText = "Apply Here";
            link.target = "_blank";
        }

        function flipkart() {
            document.getElementById("fl").innerText = 
                "Flipkart is looking for a Mobile App Developer skilled in Android and iOS development.";
            const link = document.getElementById("fll");
            link.href = "https://www.flipkartcareers.com";
            link.innerText = "Apply Here";
            link.target = "_blank";
        }
        function apple() {
    document.getElementById("ap").innerText = 
        "Apple is hiring a Data Scientist to work on machine learning algorithms and data analysis.";
    const link = document.getElementById("apl");
    link.href = "https://www.apple.com/jobs/us/";
    link.innerText = "Apply Here";
    link.target = "_blank";
}

function ibm() {
    document.getElementById("ib").innerText = 
        "IBM is seeking a DevOps Engineer to streamline operations and enhance software delivery.";
    const link = document.getElementById("ibl");
    link.href = "https://www.ibm.com/employment/";
    link.innerText = "Apply Here";
    link.target = "_blank";
}

function deloitte() {
    document.getElementById("de").innerText = 
        "Deloitte is looking for a Business Analyst to support consulting projects and client solutions.";
    const link = document.getElementById("del");
    link.href = "https://www2.deloitte.com/global/en/careers/job-search.html";
    link.innerText = "Apply Here";
    link.target = "_blank";
}

function accenture() {
    document.getElementById("ac").innerText = 
        "Accenture is hiring an IT Consultant to implement innovative technology solutions.";
    const link = document.getElementById("acl");
    link.href = "https://www.accenture.com/us-en/careers";
    link.innerText = "Apply Here";
    link.target = "_blank";
}
deloitte();
accenture();


        function review() {
            const reviewInput = document.getElementById("review").value;
            if (reviewInput.trim() !== "") {
                document.getElementById("last").innerText = "Thank you for submitting your review!";
                console.log("Review submitted: ", reviewInput);
                document.getElementById("review").value="";
            } else {
                document.getElementById("last").innerText = "Please enter a valid review.";
            }
        }

        function openModal() {
            document.getElementById("loginModal").style.display = "block";
        }

        function closeModal() {
           document.getElementById("loginModal").style.display = "none";
        }

        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username && password) {
                document.getElementById("login-message").innerText = "Login successful!";
                closeModal();
               // document.getElementById("login-button").style.display = "none"; 
               document.getElementById("login-button").innerText=`${username}`
                document.getElementById("login-button").style.color="black";
                document.getElementById("login-button").style.fontSize="1.2em";
            } else {
                document.getElementById("login-message").innerText = "Please enter valid credentials.";
            }
            //document.getElementById("login-button").innerText=`${username}`;
        }

        
        window.onclick = function(event) {
            const modal = document.getElementById("loginModal");
            if (event.target === modal) {
                closeModal();
            }
        };

        window.onload = function () {
            update();
        };