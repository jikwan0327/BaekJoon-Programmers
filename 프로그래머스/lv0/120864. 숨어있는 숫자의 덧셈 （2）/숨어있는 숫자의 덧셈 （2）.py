def solution(my_string):
    answer = 0
    cache = ''
    for i in my_string:
        if i.isdigit():
            if cache.isdigit():
                answer += int(cache+i) - int(cache)
                cache = f'{cache+i}'
            else:
                answer += int(i)
                cache = i
        else:
            cache = ''
    return answer