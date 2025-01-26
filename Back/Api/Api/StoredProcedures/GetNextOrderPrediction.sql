USE [StoreSample]
GO
/****** Object:  StoredProcedure [dbo].[GetNextOrderPrediction]    Script Date: 25/01/2025 6:02:56 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Crear el procedimiento almacenado para predecir la próxima fecha de orden
ALTER   PROCEDURE [dbo].[GetNextOrderPrediction]
AS
BEGIN
    SET NOCOUNT ON;

    -- Subconsulta para calcular las diferencias entre fechas
    WITH OrderDifferences AS (
        SELECT 
            O.custid,
            C.companyname AS [CustomerName],
            O.orderdate AS [OrderDate],
            LAG(O.orderdate) OVER (PARTITION BY O.custid ORDER BY O.orderdate) AS [PreviousOrderDate]
        FROM 
            Sales.Orders O
        INNER JOIN 
            Sales.Customers C ON O.custid = C.custid
    )
    SELECT 
        OD.[CustomerName],
        MAX(OD.[OrderDate]) AS [LastOrderDate],
        DATEADD(DAY, ROUND(AVG(DATEDIFF(DAY, OD.[PreviousOrderDate], OD.[OrderDate]) * 1.0), 0), MAX(OD.[OrderDate])) AS [NextPredictedOrder]
    FROM 
        OrderDifferences OD
    WHERE 
        OD.[PreviousOrderDate] IS NOT NULL -- Ignorar registros sin fecha previa
    GROUP BY 
        OD.[CustomerName];
END;


EXEC GetNextOrderPrediction;