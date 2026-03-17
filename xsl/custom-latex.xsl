<?xml version='1.0' encoding='UTF-8'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <!-- 1. Import the standard PreTeXt LaTeX stylesheet -->
    <!-- Note: './core/' is required when using PreTeXt-CLI -->
    <xsl:import href="./core/pretext-latex.xsl"/>

    <!-- 2. Customize LaTeX preamble (add packages, definitions, etc.) -->
    <xsl:template name="debug-message">
        <xsl:message>*** Custom XSL: Appending to Preamble ***</xsl:message>
    </xsl:template>

    <xsl:template match="slate" mode="preamble">
        <!-- Keep the default preamble content -->
        <xsl:apply-imports/>
        
        <!-- Add your custom LaTeX code here -->
        <xsl:text>\usepackage{tikz}&#xa;</xsl:text>
        <xsl:text>\usetikzlibrary{shapes.geometric}&#xa;</xsl:text>
        <xsl:text>\usepackage{geometry}&#xa;</xsl:text>
        <xsl:text>\geometry{letterpaper, margin=1in}&#xa;</xsl:text>
        <xsl:text>% Add more custom packages here&#xa;</xsl:text>
    </xsl:template>

    <!-- 3. Example: Customize output parameters -->
    <!-- Set font size to 11pt -->
    <xsl:param name="latex.font.size" select="'11pt'"/>
    <!-- Usexelatex or pdflatex -->
    <xsl:param name="latex.engine" select="'xelatex'"/>

</xsl:stylesheet>