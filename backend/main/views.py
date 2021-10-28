from django.shortcuts import render
from .models import *
from copy import deepcopy


class HopcroftKarp(object):
    def __init__(self, graph):
        self.matching = {}
        self.dfs_paths = []
        self.dfs_parent = {}

        self.graph = deepcopy(graph)
        self.left = set(self.graph.keys())
        self.right = set()

        for value in self.graph.values():
            self.right.update(value)
        for vertex in self.left:
            for neighbour in self.graph[vertex]:
                if neighbour not in self.graph:
                    self.graph[neighbour] = set()
                    self.graph[neighbour].add(vertex)
                else:
                    self.graph[neighbour].add(vertex)

    def __bfs(self):
        layers = []
        layer = set()
        for vertex in self.left:
            if vertex not in self.matching:
                layer.add(vertex)
        layers.append(layer)
        visited = set()
        while True:

            layer = layers[-1]
            new_layer = set()
            for vertex in layer:
                if vertex in self.left:
                    visited.add(vertex)
                    for neighbour in self.graph[vertex]:
                        if neighbour not in visited and (
                                vertex not in self.matching or neighbour != self.matching[vertex]):
                            new_layer.add(neighbour)
                else:
                    visited.add(vertex)
                    for neighbour in self.graph[vertex]:

                        if neighbour not in visited and (
                                vertex in self.matching and neighbour == self.matching[vertex]):
                            new_layer.add(neighbour)
            layers.append(new_layer)

            if len(new_layer) == 0:
                return layers  # break

            if any(vertex in self.right and vertex not in self.matching for vertex in new_layer):
                return layers
                # break

    def __dfs(self, v, index, layers):
        if index == 0:
            path = [v]
            while self.dfs_parent[v] != v:
                path.append(self.dfs_parent[v])
                v = self.dfs_parent[v]
            self.dfs_paths.append(path)
            return True
        for neighbour in self.graph[v]:
            if neighbour in layers[index - 1]:

                if neighbour in self.dfs_parent:
                    continue
                if (neighbour in self.left and (v not in self.matching or neighbour != self.matching[v])) or \
                        (neighbour in self.right and (v in self.matching and neighbour == self.matching[v])):
                    self.dfs_parent[neighbour] = v
                    if self.__dfs(neighbour, index - 1, layers):
                        return True
        return False

    def maximum_matching(self, keys_only=False):
        while True:
            layers = self.__bfs()

            if len(layers[-1]) == 0:
                break
            free_vertex = set([vertex for vertex in layers[-1] if vertex not in self.matching])

            del self.dfs_paths[:]
            self.dfs_parent.clear()

            for vertex in free_vertex:
                self.dfs_parent[vertex] = vertex
                self.__dfs(vertex, len(layers) - 1, layers)

            # if the set of paths is empty, nothing to add to the matching...break
            if len(self.dfs_paths) == 0:
                break

            for path in self.dfs_paths:
                for i in range(len(path)):
                    if i % 2 == 0:
                        self.matching[path[i]] = path[i + 1]
                        self.matching[path[i + 1]] = path[i]
        if keys_only:
            self.matching = {k: v for k, v in self.matching.items() if k in self.left}
        return self.matching


def connect(request):
    connection_requests = {'Patient1': {'therapist1'},
                           'Patient2': {'therapist1', 'therapist2'},
                           'Patient3': {'therapist1', 'therapist1'},
                           'Patient4': {'therapist2', 'therapist3', 'therapist4'},
                           'Patient5': {'therapist4', 'therapist5', 'therapist6'},
                           'Patient6': {'therapist5', 'therapist6', 'therapist7'},
                           'Patient7': {'therapist8'}
                           }
    connections = HopcroftKarp(connection_requests).maximum_matching(keys_only=True)
    for patient, therapist in connections.items():
        print(patient, therapist)
    return render(request=request, template_name="main/connect.html")
