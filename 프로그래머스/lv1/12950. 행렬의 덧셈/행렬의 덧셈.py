import numpy as np

def solution(arr1, arr2):
    answer = [[0]*len(arr1[0]) for _ in arr1]
    a = np.array(arr1)
    b = np.array(arr2) 
    answer=a+b
    return answer.tolist()