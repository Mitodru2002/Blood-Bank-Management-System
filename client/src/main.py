import nltk
import numpy as np

# nltk.download('punkt')
from nltk.stem.porter import PorterStemmer 
stemmer = PorterStemmer()
def tokenize(sentence):
    return nltk.word_tokenize(sentence)
def stem(word):
    return stemmer.stem(word.lower())
def bag_of_words(tokenize_sentence,all_words):
    tokenized_sentence=[stem(w) for w in tokenize_sentence]
    bag= np.zeros(len(all_words),dtype=np.float32)
    for idx,w in enumerate(all_words):
        if w in tokenized_sentence:
            bag[idx]=1
    return bag
#sentence=['hellow','how ','are','you']
#words= ['hii', 'how', 'are' ,'the', 'fact ','you','when', 'it', 'comes',' to ','zqw']
#bag=bag_of_words(sentence,words)
#print (bag)
#a="how are you my friend."
#print(a)
#b=tokenize(a)
#print(b)
#words=["organisation","organism","organize"]
#stemmed_words=[stem(w) for w in words]
#print(stemmed_words)