# from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Entry
from .serializers import EntrySerializer
from authentication.models import UserAccount



@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/entries',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of entries'
        },
        {
            'Endpoint': '/entries/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single entry object'
        },
        {
            'Endpoint': '/entries/create',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new entry with data sent in post request'
        },
        {
            'Endpoint': '/entries/id/update',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
    ]

    return Response(routes)


@api_view(['GET'])
def getEntries(request):
    print(request.user)
    user = UserAccount.objects.get(username=request.user)
    notes = Entry.objects.filter(user=user)
    print("FDg", notes)
    serializer = EntrySerializer(notes, many=True)
    print(serializer.data)
    print("FDg")
    return Response(serializer.data)


@api_view(['GET'])
def getEntry(request, pk):
    print(pk)
    user = UserAccount.objects.get(username=request.user)
    notes = Entry.objects.get(id=pk, user=user)
    serializer = EntrySerializer(notes, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def updateEntry(request, pk):
    data = request.data
    user = UserAccount.objects.get(username=request.user)

    note = Entry.objects.get(id=pk, user=user)
    print(note)
    print("Fg")

    print(data.moodTypes)
    serializer = EntrySerializer(instance=note, data=data)

    if serializer.is_valid():
        print(data)
        serializer.save()
    print(serializer.errors)

    return Response(serializer.data)


@api_view(['POST'])
def createEntry(request):
    data = request.data

    print(data)
    user = UserAccount.objects.get(username=request.user)
    note = Entry.objects.create(
        date=data['date'],
        mood=data['mood'],
        moodTypes=data['moodTypes'],
        sleep=data['sleep'],
        eating=data['eating'],
        exercise=data['exercise'],
        user=user
    )
    serializer = EntrySerializer(note, many=False)
    return Response(serializer.data)


