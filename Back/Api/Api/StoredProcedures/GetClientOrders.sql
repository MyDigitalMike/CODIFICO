USE [StoreSample]
GO
/****** Object:  StoredProcedure [dbo].[GetClientOrders]    Script Date: 25/01/2025 7:02:11 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER   PROCEDURE [dbo].[GetClientOrders]
    @CustomerId INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
	    Custid,
        Orderid,
        RequiredDate,
        ShippedDate,
        ShipName,
        ShipAddress,
        ShipCity
    FROM 
        Sales.Orders
    WHERE 
        Custid = @CustomerId; -- Filtrar por el cliente especificado
END;
