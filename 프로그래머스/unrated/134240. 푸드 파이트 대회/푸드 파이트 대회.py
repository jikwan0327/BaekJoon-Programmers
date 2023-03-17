def solution(food):
    answer = ''
    arr = []
    for i in range(1, len(food)):
        if food[i] % 2 == 0:
            arr.append(food[i]//2)
        else:
            arr.append((food[i] - 1)//2)
    for element in range(0, len(arr)):
        for j in range(0, arr[element]):
            answer += f'{element+1}'
    end = answer[::-1]
    answer += '0'
    answer += end
    return answer