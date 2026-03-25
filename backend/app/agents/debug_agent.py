from app.agents.base_agent import BaseAgent
from app.services.gemini_service import generate_response
from app.core.logger import logger

class DebugAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="DebugAgent",
            description="Agent that helps debug code snippets and programming issues."
        )
    
    def run(self,query:str)->str:
        logger.info(f"DebugAgent received query: {query}")

        prompt=f"""
        You are an expert debugging assistant.

        Analyze the the problem and provide:
        1. Root cause of the issue
        2. Step by Step fix
        3. Corrected Code Example if applicable

        keep answers practical and concise.

        Query:{query}
        """
        return generate_response(prompt)