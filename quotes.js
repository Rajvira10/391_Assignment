const quotes = ["What does not kill you only makes you stronger.",
                "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                "The way to get started is to quit talking and begin doing.",
                "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
                "If life were predictable it would cease to be life, and be without flavor.",
                "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
                "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
                "Life is what happens when you're busy making other plans.",
                "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
                "When you reach the end of your rope, tie a knot in it and hang on.",
                "Don't judge each day by the harvest you reap but by the seeds that you plant.",
                "The future belongs to those who believe in the beauty of their dreams.",
                "Tell me and I forget. Teach me and I remember. Involve me and I learn."
                ]

const token = Math.floor(Math.random() * quotes.length);
const quotebox = document.querySelector(".quote");
const quoteboxcolor = document.querySelector(".quotebox__inputtext")

quotebox.textContent += quotes[token];


const blue = document.querySelector(".blue");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

blue.addEventListener("click",()=>{
    quoteboxcolor.classList.add("blue");
    quoteboxcolor.classList.remove("orange");
    quoteboxcolor.classList.remove("green");
    quoteboxcolor.classList.remove("yellow");
})

orange.addEventListener("click",()=>{
    quoteboxcolor.classList.remove("blue");
    quoteboxcolor.classList.add("orange");
    quoteboxcolor.classList.remove("green");
    quoteboxcolor.classList.remove("yellow");
})

green.addEventListener("click",()=>{
    quoteboxcolor.classList.remove("blue");
    quoteboxcolor.classList.remove("orange");
    quoteboxcolor.classList.add("green");
    quoteboxcolor.classList.remove("yellow");
})

yellow.addEventListener("click",()=>{
    quoteboxcolor.classList.remove("blue");
    quoteboxcolor.classList.remove("orange");
    quoteboxcolor.classList.remove("green");
    quoteboxcolor.classList.add("yellow");
})


