from abc import ABC, abstractmethod

class BaseAgent(ABC):

    def __init__(self,name:str,description:str):
        self.name=name
        self.description=description

    @abstractmethod
    def run(self,query:str)->str:
        pass