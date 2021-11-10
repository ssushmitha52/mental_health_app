# from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from authentication.models import UserAccount



@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)


@api_view(['GET'])
def getNotes(request):
    print(request.user)
    user = UserAccount.objects.get(username=request.user)
    notes = Note.objects.filter(user=user)
    print("FDg", notes)
    serializer = NoteSerializer(notes, many=True)
    print(serializer.data)
    print("FDg")
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request, pk):
    print(pk)
    user = UserAccount.objects.get(username=request.user)
    notes = Note.objects.get(id=pk, user=user)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    user = UserAccount.objects.get(username=request.user)
    note = Note.objects.get(id=pk, user=user)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def createNote(request):
    data = request.data
    user = UserAccount.objects.get(username=request.user)
    note = Note.objects.create(
        body=data['body'],
        user=user
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
def deleteNote(request, pk):
    user = UserAccount.objects.get(username=request.user)
    note = Note.objects.get(id=pk, user=user)
    note.delete()
    return Response('Note was deleted!')
