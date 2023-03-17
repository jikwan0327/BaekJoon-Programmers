def solution(numbers):
    answer = -1
    arr = [n for n in range(0, 10)]
    for i in range(0, len(numbers)):
        if numbers[i] in arr:
            arr[numbers[i]] = 0
            
    answer = sum(arr)
    return answer