function showSection(id) {
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

function openCourse(language) {
    showSection("lesson");

    const title = document.getElementById("lessonTitle");
    const content = document.getElementById("lessonContent");

    title.innerText = language + " Basics";

    const lessons = {
        "Python": `# Python Example
print("Hello, Zoompy!")`,

        "JavaScript": `// JavaScript Example
console.log("Hello, Zoompy!");`,

        "C++": `// C++ Example
#include <iostream>
int main() {
    std::cout << "Hello, Zoompy!";
}`,

        "Java": `// Java Example
class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Zoompy!");
    }
}`
    };

    content.innerText = lessons[language];
}